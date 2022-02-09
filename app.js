const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/', (request, response, next) => {
    //console.log(request);
    //response.send('<h1>Welcome Ironhackers!</h1>');
    response.sendFile(__dirname + '/public/views/index.html');
  });__dirname

  app.get('/', (request, response, next) => {
    //console.log(request);
    //response.send('<h1>Welcome Ironhackers!</h1>');
    response.sendFile(__dirname + '/public/views/about.html');
  });__dirname

  app.get('/', (request, response, next) => {
    //console.log(request);
    //response.send('<h1>Welcome Ironhackers!</h1>');
    response.sendFile(__dirname + '/public/views/arnoldsWork.html');
  });__dirname



app.listen(3002, () => console.log('Server running on port 3000!'));