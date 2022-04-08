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

app.listen(process.env.PORT || 3000);
