"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _price = require("../controller/price.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.post("/", _price.converter);
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.post("/addPrice", _price.addPrice);
var _default = ROUTER;
exports.default = _default;