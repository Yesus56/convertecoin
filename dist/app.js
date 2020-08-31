"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _money = _interopRequireDefault(require("./routers/money.routes"));

var _user = _interopRequireDefault(require("./routers/user.routes"));

var _rol = _interopRequireDefault(require("./routers/rol.routes"));

var _view = _interopRequireDefault(require("./routers/view.routes"));

var _permission = _interopRequireDefault(require("./routers/permission.routes"));

var _rolpermission = _interopRequireDefault(require("./routers/rolpermission.routes"));

var _coins = _interopRequireDefault(require("./routers/coins.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importar rutas
const APP = (0, _express.default)(); //configuraciones iniciales

APP.use((0, _cors.default)());
APP.use(_bodyParser.default.urlencoded({
  extended: true
}));
APP.use(_bodyParser.default.json());
APP.use((0, _express.json)());
APP.use((0, _morgan.default)("dev")); //rutas

APP.use("/api/money", _money.default);
APP.use("/api/user", _user.default);
APP.use("/api/rol", _rol.default);
APP.use("/api/view", _view.default);
APP.use("/api/permission", _permission.default);
APP.use("/api/rolpermission", _rolpermission.default);
APP.use("/api/coin", _coins.default);
var _default = APP;
exports.default = _default;