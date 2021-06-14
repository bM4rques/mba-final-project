const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const { pageUsers, saveUser, pageMenus, saveMenu } = require('./pages');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))
  .get('/users', pageUsers)
  .get('/menus', pageMenus)
  .post('/save-user', saveUser)
  .post('/save-menu', saveMenu)
  .listen(5500);
