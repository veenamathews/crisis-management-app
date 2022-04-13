const TELEGRAM_MOCK_DATA = require('./telegram/mockData.json');
const parser = require('./telegram/parser');
const openAIModule = require('./core/openai');

(async () => {
  // Store messages from the Telegram channel in the cache

  // parser.storeTelegramMessages(TELEGRAM_MOCK_DATA.messages);

  // Process messages stored in parser.MESSAGES_CACHE_FILE
  // await parser.parseStoredMessages();

  // OpenAI
  // const openAI = new openAIModule.OpenAI();
  // const message = 'I live in Berlin Pankow, would like to volunteer for ukrainian crisis. I\'m a nurse with 10 years experience. I\'m available after 4pm on weekdays. My email: nurse@example.com';
  // const response = await openAI.processMessage(message);
  // console.log('response', response);
})();
