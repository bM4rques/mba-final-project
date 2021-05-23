const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const { pageUsers, saveUser } = require('./pages');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))
  .get('/users', pageUsers)
  .post('/save-user', saveUser)
  .listen(5500);
