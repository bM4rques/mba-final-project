var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '',
  database: 'moc',
});

var app = express();

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/src/views/login.html'));
});

app.post('/auth', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;

  if (username && password) {
    connection.query(
      'SELECT * FROM users WHERE Name = ? AND Password = ?',
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          response.redirect('/home');
        } else {
          response.send('Usuário ou senha incorretos!');
        }

        response.end();
      }
    );
  } else {
    response.send('Por favor, insira seu usuário e senha!');
    response.end();
  }
});

app.get('/home', function (request, response) {
  if (request.session.loggedin) {
    response.send('Bem-vindo, ' + request.session.username + '!');
  } else {
    response.send('Por favor, faça o login para acessar esta página!');
  }

  response.end();
});

app.listen(3000);
