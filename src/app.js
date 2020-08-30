import express, { json } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

//importar rutas
import money from "./routers/money.routes";
import user from "./routers/user.routes";
import rol from "./routers/rol.routes";
import view from "./routers/view.routes";
import permission from "./routers/permission.routes";
import rolpermission from "./routers/rolpermission.routes";
import coins from "./routers/coins.routes";

const APP = express();
//configuraciones iniciales

APP.use(cors());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(json());
APP.use(morgan("dev"));

//rutas

APP.use("/api/money", money);
APP.use("/api/user", user);
APP.use("/api/rol", rol);
APP.use("/api/view", view);
APP.use("/api/permission", permission);
APP.use("/api/rolpermission", rolpermission);
APP.use("/api/coin", coins);
export default APP;
