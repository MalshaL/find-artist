import {Router} from 'express';
import axios from "axios";


class MainRouter {
    router = Router();

    constructor() {
        this._configure();
    }

    getAccessToken(config: { clientId: string; clientSecret: string; grantType: string; authApiUrl: string; }) {
        this.router.get('/getAccessToken', (req, res) => {
            axios({
                url: config.authApiUrl + 'api/token',
                method: 'post',
                params: {
                    grant_type: 'client_credentials'
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic ' + Buffer.from(config.clientId + ":" + config.clientSecret).toString('base64')
                }
            })
                .then(response => {
                    console.log(response);
                    res.status(response.status).send(response.data);
                })
                .catch(error => {
                    console.log(error);
                    res.status(error.status).send({error: error});
                });
        })
    }

    getArtists(config: { apiUrl: string }) {
        this.router.get('/getArtists', (req, res) => {
            if (req.header('searchTerm') === "") {
                res.status(200).send([]);
            } else {
                axios({
                    url: config.apiUrl + 'search',
                    method: 'get',
                    params: {
                        type: 'artist',
                        q: req.header('searchTerm'),
                        limit: 12
                    },
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: 'Bearer ' + req.header('token')
                    }
                })
                    .then(response => {
                        console.log(response);
                        res.status(response.status).send(response.data.artists.items);
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(error.status).send({error: error});
                    });
            }
        })
    }

    getArtist(config: { apiUrl: string }) {
        this.router.get('/getArtist', (req, res) => {
            axios({
                url: config.apiUrl + 'artists/' + req.header('id'),
                method: 'get',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + req.header('token')
                }
            })
                .then(response => {
                    console.log(response);
                    res.status(response.status).send(response.data);
                })
                .catch(error => {
                    console.log(error);
                    res.status(error.status).send({error: error});
                });
        })
    }

    getArtistTracks(config: { apiUrl: string }) {
        this.router.get('/getArtistTracks', (req, res) => {
            axios({
                url: config.apiUrl + 'artists/' + req.header('id') + '/top-tracks',
                method: 'get',
                params: {
                    market: 'AU'
                },
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + req.header('token')
                }
            })
                .then(response => {
                    console.log(response);
                    res.status(response.status).send(response.data.tracks);
                })
                .catch(error => {
                    console.log(error);
                    res.status(error.status).send({error: error});
                });
        })
    }

    getTrackFeatures(config: { apiUrl: string }) {
        this.router.get('/getTrackFeatures', (req, res) => {
        axios({
            url: config.apiUrl + 'audio-features',
            method: 'get',
            params: {
                ids: req.header('ids')
            },
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + req.header('token')
            }
        })
            .then(response => {
                console.log(response);
                res.status(response.status).send(response.data.audio_features);
            })
            .catch(error => {
                console.log(error);
                res.status(error.status).send({error: error});
            });
    })
    }

    private _configure() {
        // read config variables
        const config = require('./config');

        this.getAccessToken(config);
        this.getArtists(config);
        this.getArtist(config);
        this.getArtistTracks(config);
        this.getTrackFeatures(config);
    }


}

export = new MainRouter().router;