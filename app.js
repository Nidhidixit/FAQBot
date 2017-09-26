//const builder = require('botbuilder');
//const restify = require('restify');

//create a bot
//const connector = new builder.ChatConnector();
//const bot = new builder.UniversalBot(
  //  connector,
   // [
     //   (session) => {
       //    // session.send('Hello Bot');
         //  builder.Prompts.text(session, "Hello!, what is your name?");
       // },
       // (session, results) => {
       //     session.userData.name = results.response;
       //     builder.Prompts.number(session, "Hi " + results.response);
       //    // session.endDialog('Hello, ${results.response}');
        //}
    ]
//);

const restify = require('restify');
require('dotenv').config();
const bot = require('./bot.js');

const server = restify.createServer();
server.post('/api/messages', bot.connector('*').listen());
server.listen(process.env.PORT, () => {
    console.log(`${server.name} listening to ${server.url}`);
});

////create the host web server
//const server = restify.createServer();
//server.post('/api/messages',connector.listen());
//server.listen(
//    process.env.PORT || 3978,
//    () => console.log('server up!!')
//)