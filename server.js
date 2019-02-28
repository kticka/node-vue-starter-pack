const express       = require('express')
const app           = express();
const http          = require('http').Server(app);
const path          = require('path');
const server_config = require('./config').server_config;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'));
app.use('/assets', express.static(path.join(__dirname, './build')));
app.use('/assets/fonts', express.static(path.join(__dirname, './app/fonts')));
app.use('/assets/images', express.static(path.join(__dirname, './app/images')));

http.listen(server_config.port, function () {
  console.log('Server listening on ' + server_config.port + ' port.');
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/test', (req, res) => {
    const obj = {
      text: 'Hello world!'
    };
    res.status(200).send(obj);
  });
});