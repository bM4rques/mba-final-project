module.exports = async function (db, { menuValue }) {
  // Insert data in the menus table
  const insertedMenu = await db.run(`
    INSERT INTO menus (
      date,
      options
    ) VALUES (
      '${menuValue.date}',
      '${menuValue.options}'
    );
  `);
};
