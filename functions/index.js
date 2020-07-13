const functions = require('firebase-functions');
const app = require('./app');

exports.bothelloworld = functions.https.onRequest(app);

