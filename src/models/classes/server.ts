import express, { Application } from 'express';
import cors from 'cors';
import indexRouter from '../../routes/index';
import foodsRouter from '../../routes/api/foods';
import db from '../../config/database/connection';

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
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database is online')
        } catch (error) {
            let message = 'Unknow Error'
           if (error instanceof Error) {
            message = error.message;
           }
           console.log({message});
           //throw new Error( 'could not connect to database' )
        }
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