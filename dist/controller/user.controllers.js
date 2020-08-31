"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.createUser = createUser;
exports.updatePassword = updatePassword;
exports.updateUsers = updateUsers;

var _users = require("../models/users.models");

var _user = require("../schemas/user.schema");

var _errors = require("../utils/errors");

var _lodash = require("lodash");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _joinpermission = require("../utils/joinpermission");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function login(req, res) {
  let body = req.body;

  try {
    let {
      login
    } = body;

    let obj = _user.SchemaLoginuser.validate(login);

    (0, _errors.comparateError)(obj);
    let email = obj.value.email;
    let user = await (0, _users.getUserRol)({
      email: obj.value.email
    });

    if ((0, _lodash.isEmpty)(user)) {
      throw new Error("Usuario Invalida");
    }

    let vali = _bcrypt.default.compareSync(obj.value.password, user[0].password);

    console.log(vali);
    if (!vali) throw new Error("Clave invalida");
    let roles = (0, _joinpermission.rolesJoin)(user[0].role.rol_permissions);

    let token = _jsonwebtoken.default.sign({
      id: user[0].id,
      nombres: `${user[0].primer_nombre} ${user[0].segundo_nombre || ""}`,
      primer_apellido: `${user[0].primer_apellido} ${user[0].segundo_apellido || ""}`,
      email: user[0].email,
      rol: user[0].role.name,
      permisos: roles
    }, process.env.PASSSECRET);

    return res.json({
      user,
      token
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
} //crear usuario


async function createUser(req, res) {
  let body = req.body;

  try {
    let {
      user
    } = body;
    let obj = await _user.SchemaUserCreate.validate({ ...user
    });
    (0, _errors.comparateError)(obj);
    let validateUser = await (0, _users.getUser)({
      email: obj.value.email
    });
    if (!(0, _lodash.isEmpty)(validateUser)) throw new Error("Email ya  existe");
    obj.value.password = await _bcrypt.default.hashSync(obj.value.password, 10);
    let userNew = await (0, _users.addUser)({ ...obj.value
    });
    return res.json({
      message: "Usuario fue creado"
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
} //actulizar password


async function updatePassword(req, res) {
  let body = req.body;

  try {
    let {
      updpass
    } = body;
    let obj = await _user.SchemaUserPassword.validate({ ...updpass
    });
    (0, _errors.comparateError)(obj);
    obj.value.password = await _bcrypt.default.hashSync(obj.value.password, 10);
    let upd = await (0, _users.updateUser)({ ...obj.value
    }, {
      id: 7
    });
    return res.json({
      message: "Clave Actualizada"
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
} //actualziar datos del usuario exepto la clave


async function updateUsers(req, res) {
  let body = req.body;

  try {
    let {
      upduser
    } = body;
    let obj = await _user.SchemaUserUpdate.validate({ ...upduser
    });
    (0, _errors.comparateError)(obj);
    let upd = await (0, _users.updateUser)({ ...obj.value
    }, {
      id: 7
    });
    return res.json({
      message: "Datos actualizados"
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "" + erros
    });
  }
}