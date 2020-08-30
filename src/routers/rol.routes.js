import { Router } from "express";
import {
  createRol,
  getaLLRol,
  updRol,
  getOne,
} from "../controller/roles.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();
ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.post("/", createRol);
ROUTER.get("/", getaLLRol);
ROUTER.get("/rolone", getOne);
ROUTER.put("/", updRol);

export default ROUTER;
