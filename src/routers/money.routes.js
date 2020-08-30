import { Router } from "express";
import { converter, addPrice } from "../controller/price.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();

ROUTER.post("/", converter);

ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.post("/addPrice", addPrice);

export default ROUTER;
