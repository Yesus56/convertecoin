"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _view = require("../controller/view.controllers");

var _tokenVerify = require("../middleware/tokenVerify.middleware");

var _rol = require("../middleware/rol.middleware");

const ROUTER = (0, _express.Router)();
ROUTER.use(_tokenVerify.verifiToken);
ROUTER.use(_rol.rolPermission);
ROUTER.get("/", _view.getViews);
ROUTER.get("/viewone", _view.viewOne);
ROUTER.post("/", _view.createViews);
ROUTER.put("/", _view.updViews);
var _default = ROUTER;
exports.default = _default;