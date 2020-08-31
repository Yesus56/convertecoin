"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _coins = require("../controller/coins.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.get("/", _coins.getCoin);
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.post("/", _coins.createCoin);
ROUTER.put("/", _coins.updCoin);
var _default = ROUTER;
exports.default = _default;