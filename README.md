# AWS Lambda function skeleton for Alexa skills

Based on [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). The lambda function has to be created manually at this point, there is a script for updating it in `scripts/publish.sh`.

# Setup

* the alexa app id is loaded from environment variable `ALEXA_APP_ID`
* `npm install` in src dir
* go to scripts/publish.sh and fill in the function name, aws iam profile name and aws region