import express from "express";
import config from "./config";
import pelisRoute from "./routes/pelis.route";

const app = express();

// settings
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(pelisRoute);


export default app;