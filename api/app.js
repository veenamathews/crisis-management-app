// API keys, configs
const telegramConfig = {
    api_id: 'YOUR_APIID_HERE',
    api_hash: 'YOUR_APIHASH_HERE'
};
const port = process.env.PORT || 3000; // use ENV variable from server

// Imports
const fs = require('fs');
const path = require('path');
const MTProto = require('@mtproto/core');
const express = require('express');
const openAIModule = require('./core/openai');

// OpenAI setup
const openAI = new openAIModule.OpenAI();

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

app.get('/api/heartbeat', async (req, res) => {
  const response = {
    result: 'crisis-management-api is up and running!',
  }
  res.end(JSON.stringify(response));
});

// Get parsed messages from cache
app.get('/api/getMessages', async (req, res) => {
  try {
    const fileData = fs.readFileSync('./api-cache/messages.json');
    const messages = JSON.parse(fileData);
    res.end(JSON.stringify(messages));
  } catch (error) {
    res.end(JSON.stringify(error));
  }  
});
  
app.post('/openai/processMessage', async (req, res, next) => {
  try {
    console.log('/openai/processMessage', req.body);

    // Get results from AI
    const result = await openAI.processMessage(req.body.message);

    console.log('result', result);
    console.log('---');

    // Response
    res.end(JSON.stringify(result));

  } catch (error) {
    next(error);
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
