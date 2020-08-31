"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _rolpermission = require("../controller/rolpermission.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.post("/", _rolpermission.craeteRolper);
ROUTER.put("/", _rolpermission.updRolper);
ROUTER.get("/onerolper", _rolpermission.getoneRolper);
ROUTER.get("/", _rolpermission.getAllRolper);
/*
 */

var _default = ROUTER;
exports.default = _default;