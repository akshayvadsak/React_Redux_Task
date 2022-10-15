
require('dotenv').config();
const http = require('http');
const app = require('./connection/express.connection');
const sequelize = require('./database/index');
const PORT = process.env.APP_PORT;

async function assertDatabaseConnectionOk() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    process.exit(1);
  }
}

async function init() {
  try {
    await assertDatabaseConnectionOk();
    console.log(`Starting Sequelize + Express example on port ${PORT}...`);
    var httpServer = http.createServer(app);
    httpServer.listen(PORT,() => {
      console.log(`HTTP Server running on port ${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

init();


