import express, { Application } from 'express';
import cors from 'cors';
import indexRouter from '../../routes/index';
import mealsRouter from '../../routes/api/meals';
import categoriesRouter from '../../routes/api/categories'

class Server {

    private app: Application
    private port: string
    private paths = {
        index: '/',
        api: {
            meals : '/api/meals',
            categories: '/api/categories'
        }
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        this.app.use(this.paths.index, indexRouter);
        this.app.use(this.paths.api.meals, mealsRouter);
        this.app.use(this.paths.api.categories, categoriesRouter);
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

    // async dbConnection(){
    //     try {
    //         await seqDb.authenticate();
    //         console.log('Database is online')
    //     } catch (error) {
    //         let message = 'Unknow Error'
    //        if (error instanceof Error) {
    //         message = error.message;
    //        }
    //        console.log({message});
    //        //throw new Error( 'could not connect to database' )
    //     }
    // }

    // async dbDisconnection(){
    //     try {
    //         await seqDb.close();
    //         console.log('Database is offline')
    //     } catch (error) {
    //         let message = 'Unknow Error'
    //        if (error instanceof Error) {
    //         message = error.message;
    //        }
    //        console.log({message});
    //        //throw new Error( 'could not disconnect to database' )
    //     }
    // }