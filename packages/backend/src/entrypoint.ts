import { ServerWrapper } from "./server";
import { app } from "./app";


// create new server wrapper
const myServer: ServerWrapper = new ServerWrapper();
myServer.init();

// initialize the application
app.initialize();