// API keys, configs
const telegramConfig = {
    api_id: 'YOUR_APIID_HERE',
    api_hash: 'YOUR_APIHASH_HERE'
};
const OPENAI_API_KEY = 'YOUR_KEY_HERE';
const port = process.env.PORT || 3000; // use ENV variable from server

// Imports
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

console.log(TELEGRAM_MOCK_DATA);
// main route
app.get('/', (req, res) => {
    res.send('hello world');
});

// fetch latest telegram messages from given channel
app.get('/api/telegramMessages/:channelname', async (req, res) => {
    try{
        const {phone_code_hash} = await sendCode('16046907349');
        res.send(phone_code_hash);
    }
    catch(error){
        res.send(error);
    }
    //res.send(await callTelegramApi('help.getNearestDc'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

app.get('/openai/heartbeat', async (req, res) => {
    const response = {
      result: 'crisis-management-openai-api is up and running!',
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
  
    question = 'Extract home address from this text: ';
    result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    response.data.address = result.replace(/\n/g, '');
    response.log.push({
      q: question,
      a: result,
    });
  
    question = 'Extract email address from this text: ';
    result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    response.data.email = result.replace(/\n/g, '');
    response.log.push({
      q: question,
      a: result,
    });
  
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
    - transport 
    assign the probability based on this text: `;
    result = cleanUpAIResponse(await askAI({ prompt: question + prompt}));
    response.log.push({
      q: question,
      a: result,
    });
  
    // Response
    res.end(JSON.stringify(response));
});

// telegram API helper functions
async function sendCode(phone){
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
    return str.replace('\n', '');
}