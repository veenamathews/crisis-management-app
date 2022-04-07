const telegramConfig = {
    api_id: '18760180',
    api_hash: 'f38c0deb0f9ae111364403dba4604040'
};
const path = require('path');
const express = require('express');
const app = express();

// use ENV variable from server
const port = process.env.PORT || 3000;

// main route
app.get('/', (req, res) => {
    res.send('hello world');
});

// fetch latest telegram messages from given channel
app.get('/api/telegramMessages/:channelname', async (req, res) => {
    try{
        const {phone_code_hash} = await sendCode('+16046907349');
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

async function callTelegramApi(method, params, options){
    // access the Node module for MTProto
    const MTProto = require('@mtproto/core');

    const mtProto = new MTProto({
        api_id: telegramConfig.api_id,
        api_hash: telegramConfig.api_hash,
        test: false,
        storageOptions: {
            path: path.resolve(__dirname, './telegram/store.json'),
        }
    });

    try {
        return await mtProto.call(method, params, options);
    } catch (error) {
        console.log(`${method} error:`, error);
        return Promise.reject(error);
    }
}

async function sendCode(phone){
    // access the Node module for MTProto
    const MTProto = require('@mtproto/core');

    const mtProto = new MTProto({
        api_id: telegramConfig.api_id,
        api_hash: telegramConfig.api_hash,
        test: false,
        storageOptions: {
            path: path.resolve(__dirname, './telegram/store.json'),
        }
    });

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