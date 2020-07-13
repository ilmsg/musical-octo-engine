
const express = require('express');
const adapter = require('./adapter');
const { EchoBot } = require('./bot');

const app = express();
const myBot = new EchoBot();

app.post('/api/messages', async (req, res) => {
    await adapter.processActivity(req, res, async (context) => {
        await myBot.run(context);
    });
});

module.exports = app;