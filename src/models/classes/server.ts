import express, { Application } from 'express';
import indexRouter from '../../routes/index';
import foodsRouter from '../../routes/api/foods';
import cors from 'cors';

class Server {

    private app: Application
    private port: string
    private paths = {
        index: '/',
        api: {
            foods : '/api/foods'
        }
    }

    constructor(){
        this.app = express();
        this.port = process.env.Port || '3000';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        this.app.use(this.paths.index, indexRouter);
        this.app.use(this.paths.api.foods, foodsRouter);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server is listening on port ${this.port}`)
        })
    }

    getApp(){
        return this.app
    }
}

export default Server