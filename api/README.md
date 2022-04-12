# API
A simple express node backend. It has change watching for faster development.
Using MTProto for telegram api, but it's currently not working :(

To run the app:

`npm start`

## Endpoints

- `/api/getMessages`: returns all the already processed messages
- `/openai/processMessage`: processes a message (passed as: `{ message }`) and uses OpenAI to extract location, category, etc.

# CLI

`node ./cli.js` to run the methods available as API endpoints from the command line (uncomment whatever you need to run)

# Docs

- https://mtproto-core.js.org/docs/
- https://beta.openai.com/docs/introduction