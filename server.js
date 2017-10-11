import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/',(req, res) => {
  res.render('index',{
    content: '...'
  });
});

//use is adds this to middleware
server.use('/api',apiRouter);
server.use(express.static('public'));


server.listen(config.port, config.host, ()=>{
  console.info('Expresss listening on port ',config.port);
});
