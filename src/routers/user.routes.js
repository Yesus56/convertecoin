import { Router } from "express";
import {
  createUser,
  updatePassword,
  updateUsers,
  login,
} from "../controller/user.controllers";
import { verifiToken } from "../middleware/tokenVerify.middleware";
import { rolPermission } from "../middleware/rol.middleware";

const ROUTER = Router();

ROUTER.post("/login", login);
ROUTER.use(verifiToken);
ROUTER.use(rolPermission);
ROUTER.post("/", createUser);
ROUTER.put("/", updateUsers);
ROUTER.put("/changepassword", updatePassword);
export default ROUTER;
