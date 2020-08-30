import { Router } from "express";
import { createCoin, updCoin, getCoin } from "../controller/coins.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();

ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.post("/", createCoin);
ROUTER.put("/", updCoin);
ROUTER.get("/", getCoin);

export default ROUTER;
