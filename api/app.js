// API keys, configs
const telegramConfig = {
    api_id: 'YOUR_APIID_HERE',
    api_hash: 'YOUR_APIHASH_HERE'
};
const OPENAI_API_KEY = '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';
const port = process.env.PORT || 3000; // use ENV variable from server

// Imports
const fs = require('fs');
const path = require('path');
const MTProto = require('@mtproto/core');
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const TELEGRAM_MOCK_DATA = require("./telegram/mockData.json");

// OpenAI setup
const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

// Telegram API setup (MTProto)
const mtProto = new MTProto({
    api_id: telegramConfig.api_id,
    api_hash: telegramConfig.api_hash,
    test: false,
    storageOptions: {
        path: path.resolve(__dirname, './telegram/store.json'),
    }
});

// Express setup
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// main route
app.get('/', (req, res) => {
    res.end('hello world!');
});

// fetch latest telegram messages from given channel
app.get('/telegramMessages/:channelname', async (req, res) => {
    try{
        const {phone_code_hash} = await sendCode('16046907349');
        res.end(phone_code_hash);
    }
    catch(error){
        res.end(error);
    }
    //res.send(await callTelegramApi('help.getNearestDc'));
});

app.get('/openai/heartbeat', async (req, res) => {
    const response = {
      result: 'crisis-management-api is up and running!',
    }
    res.end(JSON.stringify(response));
  });
  
app.post('/openai/ask', async (req, res) => {
    // Get results from AI
    const result = await askAI(req.body);

    // Prepare the response object
    const response = {
        result: cleanUpAIResponse(result),
    }

    // Response
    res.end(JSON.stringify(response));
});
  
app.post('/openai/extractData', async (req, res) => {
  
    let result;
    let question;
    const response = {
      data: {},
      log: [],    
    }
    const prompt = req.body.prompt;
  
    question = 'Extract physical location from this text: ';
    result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    response.data.address = result.replace(/\n/g, '');
    response.log.push({
      q: question,
      a: result,
    });
  
    question = 'Extract latitude and longitude from this text as { lat, lng } JSON object: ';
    result = cleanUpAIResponse(await askAI({ prompt: question + result})); // use result from the previous question
    response.data.coords = result.replace(/\n/g, '').replace(/\"/g, '');
    response.log.push({
      q: question,
      a: result,
    });
  
    // question = 'Extract email address from this text: ';
    // result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    // response.data.email = result.replace(/\n/g, '');
    // response.log.push({
    //   q: question,
    //   a: result,
    // });
  
    // question = 'Extract phone number from this text: ';
    // result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    // response.data.phoneNo = result;
    // response.log.push({
    //   q: question,
    //   a: result,
    // });
  
    question = 'Extract skills from this text: ';
    result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    response.log.push({
      q: question,
      a: result,
    });
  
    question = `For each of those categories:
    - food
    - shelter
    - health
    - legal
    - transportation 
    assign the probability based on this text: `;
    result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    response.log.push({
      q: question,
      a: result,
    });
  
    // Response
    res.end(JSON.stringify(response));
});

app.get('/openai/extractMessageData', async (req, res) => {
    const response = {
        data: []
    }
    for (const message of TELEGRAM_MOCK_DATA.messages.slice(0,10)) {
        if(message.text){
            const sanitizedMessageText = messageToPlainString(message.text);

            // attempt to extract location
            console.log(`message ${message.id} to plain string: `, sanitizedMessageText);
            let locationQuestion = "Extract location from this text: ";
            let locationAnswer = cleanUpAIResponse(await askAI({ prompt: locationQuestion + sanitizedMessageText }));
            console.log('   response is: ', locationAnswer);

            // TODO: attempt to extract category
    
            let outputObject = {
                sourceMessage:  sanitizedMessageText,
                location: locationAnswer,
                category: "",
                timestamp: message.date
            };
            console.log('   output object', outputObject)
            response.data.push(outputObject);
        }
        else{
            console.log(`message ${message.id} is empty, skipping.`)
        }
    };
    res.end(JSON.stringify(response));
});

// Get parsed messages from cache
app.get('/api/getMessages', async (req, res) => {
  try {
    const fileData = fs.readFileSync('./storage/messages.json');
    const messages = JSON.parse(fileData);
    res.end(JSON.stringify(messages));
  } catch (error) {
    res.end(JSON.stringify(error));
  }  
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// telegram API helper functions
// this is the first step on telegram authentication
async function sendCode(phone) {
    try {
        return await mtProto.call('auth.sendCode', {
            phone_number: phone,
            settings: {
                _: 'codeSettings'
            }
        });
    } catch (error) {
        console.log(`error:`, error);
        return Promise.reject(error);
    }
}

async function callTelegramApi(method, params, options){
    try {
        return await mtProto.call(method, params, options);
    } catch (error) {
        console.log(`${method} error:`, error);
        return Promise.reject(error);
    }
}

// openAI helper functions
const askAI = async (params) => {
    const defaults = {
      temperature: .3
    };
    const options = { ...defaults, ...params };
  
    const response = await openai.createCompletion("text-davinci-002", {
      ...options,
      max_tokens: 256,
    });
    return response.data;
}

const cleanUpAIResponse = (response)  => {
    const str = response.choices[0].text;
    return str.replace(/(\r\n|\n|\r)/gm,"");
}

// helper function in charge of unfolding an object that contains a message
const messageToPlainString = (input) => {
    if (typeof input === 'string'){
        return input;
    }
    else if(Array.isArray(input)) {
        let concatenatedMessages = "";
        input.forEach(element => {
            if (typeof element === 'string'){
                concatenatedMessages = concatenatedMessages.concat(element+' ');
            }
            else if(typeof element === 'object'){
                concatenatedMessages = concatenatedMessages.concat(element.text+' ');
            }
        });
        return concatenatedMessages;
    }
}