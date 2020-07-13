const http = require('http');
const app = require('./app');

const port = 3978;
http.createServer(app).listen(port,() => {
    console.log(`server start at *:${port}`)
});
