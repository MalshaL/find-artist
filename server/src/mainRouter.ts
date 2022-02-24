import {Router} from 'express';


class MainRouter {
    router = Router()

    constructor() {
        this._configure();
    }

    private _configure() {
        this.router.get('/access-token', (req, res) => {
            res.send('Access token here')
        })

        this.router.get('/tracks', (req, res) => {
          res.send(['a1', 'a2', 'a3'])
        })
    }
}

export = new MainRouter().router;