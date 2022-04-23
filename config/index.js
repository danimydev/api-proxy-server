require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  api: {
    url: process.env.API_BASE_URL,
    key: process.env.API_KEY_VALUE,
    name: process.env.API_KEY_NAME,
  }
}