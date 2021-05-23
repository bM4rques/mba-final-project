module.exports = async function (db, { userValue }) {
  // Insert data in the users table
  const insertedUser = await db.run(`
    INSERT INTO users (
      name,
      password,
      email,
      isAdmin,
      isActivated
    ) VALUES (
      '${userValue.name}',
      '${userValue.password}',
      '${userValue.email}',
      '${userValue.isAdmin}',
      '${userValue.isActivated}'
    );
  `);
};
