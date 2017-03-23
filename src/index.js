'use strict';

let Alexa = require('alexa-sdk');

exports.handler = function (event, context, callback) {
    let alexa = Alexa.handler(event, context);
    alexa.appId = process.env.ALEXA_APP_ID;

    let handlers = {
        'Unhandled': function () {
            this.emit(':tell', 'Sorry, unhandled intent.');
        }
    };

    alexa.registerHandlers(handlers);
    alexa.execute();
};