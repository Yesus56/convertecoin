import { Router } from "express";
import {
  createViews,
  getViews,
  updViews,
  viewOne,
} from "../controller/view.controllers";

const ROUTER = Router();

ROUTER.get("/", getViews);
ROUTER.get("/viewone", viewOne);
ROUTER.post("/", createViews);
ROUTER.put("/", updViews);

export default ROUTER;
