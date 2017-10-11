import config from './config';
import apiRouter from './api';
import serverRender from './serverRender';

import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname,'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/',(req, res) => {
  serverRender()
    .then(content => {
      res.render('index',{
        content
      });
    })
    .catch();

});

//use is adds this to middleware
server.use('/api',apiRouter);
server.use(express.static('public'));


server.listen(config.port, config.host, ()=>{
  console.info('Expresss listening on port ',config.port);
});
