import {Router} from 'express';
import axios from "axios";


const qs = require('querystring');

class MainRouter {
    router = Router();

    constructor() {
        this._configure();
    }

    getAccessToken(config: { clientId: string; clientSecret: string; grantType: string; apiUrl: string; }) {
        this.router.get('/access-token', (req, res) => {
            axios({
                url: config.apiUrl + 'api/token',
                method: 'post',
                params: {
                    grant_type: 'client_credentials'
                },
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic '+ Buffer.from(config.clientId+":"+config.clientSecret).toString('base64')
                }
            })
                .then(response => {
                    console.log(response);
                    res.status(200).send(response.data);
                })
                .catch(error => {
                    console.log(error);
                    res.status(400).send({error: error});
                });
        })
    }

    private _configure() {
        // read config variables
        const config = require('./config');

        this.getAccessToken(config);

        this.router.get('/tracks', (req, res) => {
            res.send(['a1', 'a2', 'a3'])
        })
    }


}

export = new MainRouter().router;