"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _permission = require("../controller/permission.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.post("/", _permission.createPermission);
ROUTER.put("/", _permission.updPermission);
ROUTER.get("/permissionone", _permission.getPermissionOne);
ROUTER.get("/", _permission.GetAllPermission);
var _default = ROUTER;
exports.default = _default;