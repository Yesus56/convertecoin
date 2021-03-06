"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _roles = require("../controller/roles.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.post("/", _roles.createRol);
ROUTER.get("/", _roles.getaLLRol);
ROUTER.get("/rolone", _roles.getOne);
ROUTER.put("/", _roles.updRol);
var _default = ROUTER;
exports.default = _default;