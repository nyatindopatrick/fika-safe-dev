const dotenv = require('dotenv');
dotenv.config();
module.exports = {

    jwtSecret: '08098grrgaorugh',
    port: process.env.PORT || 3000,
    enableAuth: true,

  } 