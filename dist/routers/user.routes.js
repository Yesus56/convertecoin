"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../controller/user.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.post("/login", _user.login);
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.post("/", _user.createUser);
ROUTER.put("/", _user.updateUsers);
ROUTER.put("/changepassword", _user.updatePassword);
var _default = ROUTER;
exports.default = _default;