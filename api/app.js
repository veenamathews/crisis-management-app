import {telegramConfig} from './telegram.config'

const express = require('express');
const app = express();

// use ENV variable from server
const port = process.env.PORT || 3000;

authenticate();

// main route
app.get('/', (req, res) => {
    res.send('hello world');
});

// fetch latest telegram messages from given channel
app.get('/api/telegramMessages/:channelname', async (req, res) => {
    console.log('attempting to fetch messages from channel', req.params.channelname);
    mtProto.call('help.getNearestDc')
    res.send(await callTelegramApi('help.getNearestDc'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// authenticate with telegram API
async function authenticate(){
    // 1. get an auth code for my phone number
    console.log(await sendCode('+16046907349'));
}

async function callTelegramApi(method, params, options){
    try {
        return await mtProto.call(method, params, options);
    } catch (error) {
        console.log(`${method} error:`, error);
        return Promise.reject(error);
    }
}

async function sendCode(phone){
    // these lines are to solve an issue where the code thinks this is a browser
    global.window = {document: {createElementNS: () => {return {}} }};
    global.navigator = {};
    global.btoa = () => {};

    const MTProto = require('@mtproto/core/envs/browser');
    const mtProto = new MTProto({
        api_id: telegramConfig.api_id,
        api_hash: telegramConfig.api_hash,
        test: false
    })

    try {
        return await mtProto.call('auth.sendCode', {
            phone_number: phone,
            settings: {
                _: 'codeSettings'
            }
        })
    } catch (error) {
        console.log(`error:`, error);
        return Promise.reject(error);
    }
}