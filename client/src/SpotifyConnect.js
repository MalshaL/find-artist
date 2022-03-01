import axios from "axios";


const ACCESS_TOKEN = "access_token";
const TOKEN_TIMESTAMP = "token_timestamp";
// Spotify token expiration time in milliseconds
const TOKEN_EXPIRATION_TIME = 3600 * 1000;
// grace time of five minutes for token expiration in milliseconds
const GRACE_TIME = 5 * 60 * 1000;

const setTokenTimestamp = () => window.localStorage.setItem(TOKEN_TIMESTAMP, ""+Date.now());

export const setStoredAccessToken = (token) => {
    setTokenTimestamp();
    window.localStorage.setItem(ACCESS_TOKEN, token);
}

const getTokenTimestamp = () => window.localStorage.getItem(TOKEN_TIMESTAMP);

const getStoredAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);

// set new access token from spotify API
const setNewAccessToken = () => {
    axios.get('/api/getAccessToken')
        .then(response => {
            setStoredAccessToken(response.data.access_token);
        })
        .catch(error => {
            console.log(error);
        });
}

// get stored access token or set new token
export const getAccessToken = () => {
    let currentToken = getStoredAccessToken();

    // if no token is set in local storage
    if (!currentToken) {
        setNewAccessToken();
        return getStoredAccessToken();
    }

    // check if token has expired
    if ((Date.now() - Number(getTokenTimestamp()) + GRACE_TIME) > TOKEN_EXPIRATION_TIME) {
        setNewAccessToken();
        return getStoredAccessToken();
    }
    // return current valid token
    return currentToken;
}

// export current access token
export const token = getAccessToken();
