import { Router } from "express";
import {
  createPermission,
  updPermission,
  getPermissionOne,
  GetAllPermission,
} from "../controller/permission.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();

ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.post("/", createPermission);
ROUTER.put("/", updPermission);
ROUTER.get("/permissionone", getPermissionOne);
ROUTER.get("/", GetAllPermission);

export default ROUTER;
