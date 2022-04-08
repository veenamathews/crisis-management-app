const OPENAI_API_KEY = 'YOUR_KEY_HERE';

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');

// OpenAI setup
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


// Helper functions
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


// Express setup
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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

app.listen(3000);
