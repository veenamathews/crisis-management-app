const TELEGRAM_MOCK_DATA = require('./telegram/source-data/poland');
const parser = require('./telegram/parser');
const openAIModule = require('./core/openai');

(async () => {
  // Clear the console
  process.stdout.write('\033c');
  // ------
  // Store messages from the Telegram channel in the cache
  // parser.storeTelegramMessages(TELEGRAM_MOCK_DATA.messages, 'poland.json');

  // ------ 
  // Process messages
  // await parser.parseStoredMessages('poland.json');
  await parser.cleanupStoredMessages('poland.json');

  // ------
  // OpenAI
  // const openAI = new openAIModule.OpenAI();
  // const message = 'I live in Berlin Pankow, would like to volunteer for ukrainian crisis. I\'m a nurse with 10 years experience. I\'m available after 4pm on weekdays. My email: nurse@example.com';
  // const response = await openAI.processMessage(message);
  // console.log('response', response);
})();
