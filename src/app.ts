import "dotenv/config";
import Server from "./models/classes/server";
import SequelizeDb from "./models/classes/sequelizeDb";

const server = new Server();
const database = new SequelizeDb();

database.connect()
.then(() => {
    console.log('Database is online');
    server.listen();
})
.catch((error) => {
    let message = 'Unknow Error'
    if (error instanceof Error) {
     message = error.message;
    }
    console.log({message});
    //throw new Error( 'Could not connect to database' )
})