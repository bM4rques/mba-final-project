const Database = require('./database/db');

async function pageUsers(req, res) {
  const query = `
    SELECT users.*
    FROM users
  `;

  try {
    const db = await Database;
    const users = await db.all(query);

    return res.render('users.html', { users });
  } catch (error) {
    console.log(error);
  }
}

async function saveUser(req, res) {
  const createUser = require('./database/createUser');

  const userValue = {
    name: req.body.name,
    password: '123',
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    isActivated: req.body.isActivated,
  };

  try {
    const db = await Database;
    await createUser(db, { userValue });

    let queryString = '?name=' + req.body.name;
    queryString += '&email=' + req.body.email;
    queryString += '&isAdmin=' + req.body.isAdmin;
    queryString += '&isActivated=' + req.body.isActivated;

    return res.redirect('/users' + queryString);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { pageUsers, saveUser };
