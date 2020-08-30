import { Router } from "express";
import {
  craeteRolper,
  updRolper,
  getoneRolper,
  getAllRolper,
} from "../controller/rolpermission.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();
ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.post("/", craeteRolper);
ROUTER.put("/", updRolper);
ROUTER.get("/onerolper", getoneRolper);
ROUTER.get("/", getAllRolper);
/*
 */
export default ROUTER;
