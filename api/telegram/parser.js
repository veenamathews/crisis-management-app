/*
 * Config
 */

const MESSAGES_CACHE_FILE = './api-cache/messages.json';


/*
 * Imports
 */

const fs = require('fs');
const puppeteer = require('puppeteer');


/*
 * Functions
 */

const getMessagesFromCache = (filepath = MESSAGES_CACHE_FILE) => {
  const fileData = fs.readFileSync(filepath);
  return JSON.parse(fileData);
}

const saveMessagesToCache = (messages, filepath = MESSAGES_CACHE_FILE) => {
  data = JSON.stringify(messages, null, 2);
  fs.writeFileSync(filepath, data);
}

async function getCoordsFromGMapUrl(url) {
  console.log('Parsing url:', url);

  const browser = await puppeteer.launch({
      headless: true
  });
  const page = await browser.newPage();

  await page.goto(url);

  const currentUrl = () => {
    return window.location.href;
  }

  await page.waitForTimeout(4000);
  let data = await page.evaluate(currentUrl);

  const regex = /!3d([0-9.]+)!4d([0-9.]+)/gm;
  let m;

  while ((m = regex.exec(data)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    
    await browser.close();
    const result = {
      lat: parseFloat(m[1]),
      lng: parseFloat(m[2]),
    };
    console.log('Found:', result);
    return result;
  }
};

function storeTelegramMessages(messages) {
  const results = messages.map(item => ({
    sourceData: item,
  }));

  data = JSON.stringify(results, null, 2);
  fs.writeFileSync(MESSAGES_CACHE_FILE, data);
}

const telegramMessageToPlainString = (input) => {
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

async function parseStoredMessages() {
  
  const messages = getMessagesFromCache();

  for (let idx = 0; idx < messages.length; idx++) {
    const message = messages[idx];
    const sourceData = message.sourceData;

    // Basic properties
    message.id = idx.toString();
    message.source = 'telegram';
    
    // Check for google maps link, if not extracted yet
    if (!message.coords && !message.gmapLink) {
      if (Array.isArray(sourceData.text)) {
        const mapLinkItem = sourceData.text.find(textItem => {
          return ((typeof textItem === 'object') && (textItem.text.includes('https://goo.gl/maps')));
        });
        if (mapLinkItem) {
          message.gmapLink = mapLinkItem.text;
        } else {
          message.gmapLink = null;
        }
      }
    }

    // Extract coords from gmap link, if haven't done already
    if (!message.coords && message.gmapLink) {
      message.coords = await getCoordsFromGMapUrl(message.gmapLink);
    }

    // Date
    message.date = sourceData.date;

    // Add tags
    message.tags = ['others'];

    // Add category
    message.category = 'others';

    // Message text
    message.originalText = telegramMessageToPlainString(sourceData.text);
  }

  console.log('messages', messages);

  saveMessagesToCache(messages);
}

/*
 * Module
 */
module.exports = { storeTelegramMessages, parseStoredMessages, getCoordsFromGMapUrl };