import seqDb from "../../config/database/seq.connection";
import { Connections } from "../interfaces/connections";

class SequelizeDb implements Connections{
    
    constructor(public config = seqDb){}

    connect():Promise<void>{
        return this.config.authenticate()
    }

    disconnect(): Promise<void> {
        return this.config.close()
    }
}

export default SequelizeDb;