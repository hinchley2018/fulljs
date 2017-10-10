import config from './config'

import express from 'express';
const server = express();

server.get('/',(req, res) => {
  res.send('Hello from Express');
});

server.get('/about.html',(req, res) => {
  res.send('Playing with fulljs, this isn\'t dangerous at all');
});

server.listen(config.port, ()=>{
  console.info('Expresss listening on port ',config.port);
});
