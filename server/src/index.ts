import express, {Request, Response} from "express";
import { router } from "./rotas/rotasDeLogin";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({ keys: ["HEX16"] }));
app.use(router);

app.listen(3123, (): void => {
    console.log("Escutando porta 3123...");
})