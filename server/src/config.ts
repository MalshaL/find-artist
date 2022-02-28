// this file loads and manages environment variables from config

// load the environment variables from .env file
// dotenv.config(
//     {path: '.env.local'}
// );
module.exports = {
    nodeDev: process.env.NODE_ENV,
    port: process.env.PORT,
    authApiUrl: process.env.AUTH_API_URL,
    apiUrl: process.env.API_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    grantType: process.env.GRANT_TYPE
};