const { Configuration, OpenAIApi } = require('openai');

const OPENAI_API_KEY = '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';

// OpenAI setup
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

function OpenAI() {
  this.openai = new OpenAIApi(configuration);

  const cleanupAIResponse = (response, soft = false) => {
    const str = response.choices[0].text;
    if (soft) {
      // Replace just first 2 new line chars
      return str.replace('\n\n', '');
    } else {
      return str.replace(/(\r\n|\n|\r)/gm,"");
    }
  }

  const aiResponseToObject = (response) => {
    try {
      return JSON.parse(response);
    } catch (error) {
      return null;
    }
  }

  this.askAI = async (params) => {
    const defaults = {
      temperature: .3
    };
    const options = { ...defaults, ...params };
  
    const response = await this.openai.createCompletion("text-davinci-002", {
      ...options,
      max_tokens: 256,
    });
    return response.data;
  }

  this.processMessage = async (message) => {
      
    let result;
    let question;
    
    const response = {
      data: {},
      log: [],    
    }
  
    question = 'Extract physical location from this text: ';
    result = cleanupAIResponse(await this.askAI({ prompt: question + message}));
    response.data.address = result.replace(/\n/g, '');
    response.log.push({
      q: question,
      a: result,
    });
  
    question = 'Extract latitude and longitude from this text as { lat, lng } JSON object: ';
    result = cleanupAIResponse(await this.askAI({ prompt: question + result})); // use result from the previous question
    response.data.coords = aiResponseToObject(result.replace(/\n/g, '').replace(/\"/g, ''));
    response.log.push({
      q: question,
      a: result,
    });
  
    // question = 'Extract email address from this text: ';
    // result = cleanupAIResponse(await this.askAI({ prompt: question + message}));
    // response.data.email = result.replace(/\n/g, '');
    // response.log.push({
    //   q: question,
    //   a: result,
    // });
  
    // question = 'Extract phone number from this text: ';
    // result = cleanupAIResponse(await this.askAI({ prompt: question + message}));
    // response.data.phoneNo = result;
    // response.log.push({
    //   q: question,
    //   a: result,
    // });
  
    // question = 'Extract skills from this text: ';
    // result = cleanupAIResponse(await this.askAI({ prompt: question + message}));
    // response.data.skills = result;
    // response.log.push({
    //   q: question,
    //   a: result,
    // });
  
    question = `For each of those categories:

    - Food
    - Shelter
    - Health Services
    - Transportation
    - Translation
    - Legal
    - Volunteering
    - Volunteers Needed
    
    assign the probability based on this text as JSON array:`;
    result = cleanupAIResponse(await this.askAI({ prompt: question + message}));
    response.data.sentiment = aiResponseToObject(result);
    response.log.push({
      q: question,
      a: result,
    });
  
    question = `Choose one of those categories:

    - Food
    - Shelter
    - Health Services
    - Transportation
    - Translation
    - Legal
    - Volunteering
    - Volunteers Needed
    
    based on this text:`;
    result = cleanupAIResponse(await this.askAI({ prompt: question + message}));
    response.data.category = result;
    response.log.push({
      q: question,
      a: result,
    });
  
    return response;
  }
}

// now we export the class, so other modules can create Cat objects
module.exports = {
  OpenAI: OpenAI
}