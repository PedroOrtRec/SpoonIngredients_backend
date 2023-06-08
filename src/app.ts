import "dotenv/config";
import Server from "./models/classes/server";

const server = new Server();

server.listen();