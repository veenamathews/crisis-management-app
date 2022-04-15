/*
 * Config
 */

const MESSAGES_CACHE_DIR = './api-cache/';


/*
 * Imports
 */

const fs = require('fs');
const puppeteer = require('puppeteer');


/*
 * Functions
 */

const getMessagesFromCache = (filename) => {
  const fileData = fs.readFileSync(MESSAGES_CACHE_DIR + filename);
  return JSON.parse(fileData);
}

const saveMessagesToCache = (messages, filename) => {
  data = JSON.stringify(messages, null, 2);
  fs.writeFileSync(MESSAGES_CACHE_DIR + filename, data);
}

const stringToObject = (response) => {
  try {
    return JSON.parse(response);
  } catch (error) {
    return null;
  }
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

function storeTelegramMessages(messages, filename) {
  console.log('Total Messages:', messages.length);

  const results = messages    
    .filter(item => ((item.type !== 'service') && (!!item.text) && (item.text !== '')))
    .slice(0, 300)
    .map(item => ({
      sourceData: item,
    }));

  data = JSON.stringify(results, null, 2);
  fs.writeFileSync(MESSAGES_CACHE_DIR + filename, data);

  console.log('Total Messages after:', results.length);
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

async function parseStoredMessages(filename) {

  const openAIModule = require('../core/openai');
  const openAI = new openAIModule.OpenAI();
  
  const messages = getMessagesFromCache(filename);

  for (let idx = 0; idx < messages.length; idx++) {
    const message = messages[idx];
    const sourceData = message.sourceData;

    if (message.id) {
      continue;
    }

    // Basic properties
    message.id = (idx + 1).toString();
    message.source = 'telegram';
    console.log('Processing:', message.id);
 
    // Date
    message.date = sourceData.date;

    // Message text
    message.sourceMessagePlainText = telegramMessageToPlainString(sourceData.text);
    
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

    // Get the data from OpenAI
    if (message.sourceMessagePlainText && message.sourceMessagePlainText !== '') {
      console.log('AI Processing:', message.id);
 
      const result = await openAI.processMessage(message.sourceMessagePlainText);

      message.address = result.data.address;
      message.coords = result.data.coords;
      message.sentiment = result.data.sentiment;
      message.category = result.data.category;
      message.aiLog = result.log;
      console.log('AI Processed:', message.id);
    }

    // Extract coords from gmap link, if haven't done already
    if (!message.coords && message.gmapLink) {
      console.log('Gmap link processing:', message.id);
      message.coords = await getCoordsFromGMapUrl(message.gmapLink);
    }

    saveMessagesToCache(messages, filename);
  }

  saveMessagesToCache(messages, filename);

  console.log('Messages processed:', messages.length);
}

async function cleanupStoredMessages(filename) {

  const knownCategories = ['Food', 'Shelter', 'Health Services', 'Transportation', 'Translation', 'Legal', 'Volunteering', 'Volunteers Needed', 'Other'];

  const findCategory = (input) => {
    for (const category of knownCategories) {
      if (input.includes(category))  {
        return category;
      }
    }
    return null;
  }
  
  const messages = getMessagesFromCache(filename);

  for (let idx = 0; idx < messages.length; idx++) {
    const message = messages[idx];
    message.aiErrors = [];

    // Cleanup Dates
    message.date = message.date.replace(/ /g, '');

    // Cleanup Coords
    if (message.coords && (typeof message.coords === 'string')) {      

      // check if we have coords but not exactly in the correct JSON format
      const input = (message.coords.includes('lat: '))
        ? message.coords.replace('lat:', '"lat":').replace('lng:', '"lng":')
        : message.coords;

      const result = stringToObject(input);
      if (result) {
        message.coords = result;
        console.log('Ok');
      } else {        
        message.aiErrors.push({
          key: 'coords',
          value: message.coords,
          error: 'invalid coords'
        });
        console.error('Error: ' + message.coords);
        message.coords = undefined;
      }      
    };

    // Cleanup Category
    console.log('message.category', message.category);
    if (message.category) {

      // Extra characters in the category string
      const sanitizedcategory = findCategory(message.category);
      if (sanitizedcategory) {
        console.error('Error: not valid category');
        message.aiErrors.push({
          key: 'category',
          value: message.category,
          error: 'extra chars'
        });
        message.category = sanitizedcategory;  
      }

      // Category is not on the list of known categories
      if (!knownCategories.includes(message.category)) {
        console.error('Error: unknown category');
        message.aiErrors.push({
          key: 'category',
          value: message.category,
          error: 'unknown'
        });
        message.category = 'Other';
      }

    } else {
      // Category was empty
      console.error('Error: category is empty');
      message.aiErrors.push({
        key: 'category',
        value: null,
        error: 'empty'
      });
      message.category = 'Other';
    }

    saveMessagesToCache(messages, filename);
  }

  saveMessagesToCache(messages, filename);

  console.log('Messages processed:', messages.length);
}

/*
 * Module
 */
module.exports = { storeTelegramMessages, parseStoredMessages, getCoordsFromGMapUrl, cleanupStoredMessages };