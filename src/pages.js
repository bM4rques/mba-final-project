const Database = require('./database/db');

// Users page
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

// Menus page
async function pageMenus(req, res) {
  const query = `
    SELECT menus.*
    FROM menus
  `;

  try {
    const db = await Database;
    const menus = await db.all(query);

    return res.render('menus.html', { menus });
  } catch (error) {
    console.log(error);
  }
}

async function saveMenu(req, res) {
  const createMenu = require('./database/createMenu');

  const menuValue = {
    date: req.body.date,
    options: req.body.options,
  };

  try {
    const db = await Database;
    await createMenu(db, { menuValue });

    let queryString = '?date=' + req.body.date;
    queryString += '&options=' + req.body.options;

    return res.redirect('/menus' + queryString);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { pageUsers, saveUser, pageMenus, saveMenu };
