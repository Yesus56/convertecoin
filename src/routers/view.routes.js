import { Router } from "express";
import {
  createViews,
  getViews,
  updViews,
  viewOne,
} from "../controller/view.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();

ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.get("/", getViews);
ROUTER.get("/viewone", viewOne);
ROUTER.post("/", createViews);
ROUTER.put("/", updViews);

export default ROUTER;
