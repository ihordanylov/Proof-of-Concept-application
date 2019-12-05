const Sequelize = require('sequelize');

module.exports = function (app) {
  const connectionString = app.get('mysql');
  // credentials for server login password
  const sequelize = new Sequelize('codingchallenge', '', '', {
    dialect: 'mysql',
    logging: false,
    define: {
      freezeTableName: true,
      timestamp: false,
    }
  });

  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync());

    return result;
  };
};
