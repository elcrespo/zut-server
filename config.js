const dotenv = require('dotenv');
dotenv.config();

const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/heroku_bslvhdd2'
  },
  secretJwtKey: process.env.SECRET_JWT_KEY || '0GdRiL1icDFwcTt3ov1vBf9Fer0EV4PCW8xgQ04fcIudOagvMzZVNvJbIOUwdFY'
}

module.exports = config
