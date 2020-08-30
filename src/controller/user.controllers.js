import {
  addUser,
  getUser,
  updateUser,
  getUserRol,
} from "../models/users.models";
import {
  SchemaUserCreate,
  SchemaUserPassword,
  SchemaUserUpdate,
  SchemaLoginuser,
} from "../schemas/user.schema";
import { comparateError } from "../utils/errors";
import { isEmpty } from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { rolesJoin } from "../utils/joinpermission";

export async function login(req, res) {
  let body = req.body;
  try {
    let { login } = body;
    let obj = SchemaLoginuser.validate(login);
    comparateError(obj);
    let email = obj.value.email;
    let user = await getUserRol({ email: obj.value.email });
    if (isEmpty(user)) {
      throw new Error("Usuario Invalida");
    }
    let vali = bcrypt.compareSync(obj.value.password, user[0].password);
    console.log(vali);
    if (!vali) throw new Error("Clave invalida");
    let roles = rolesJoin(user[0].role.rol_permissions);
    let token = jwt.sign(
      {
        id: user[0].id,
        nombres: `${user[0].primer_nombre} ${user[0].segundo_nombre || ""}`,
        primer_apellido: `${user[0].primer_apellido} ${
          user[0].segundo_apellido || ""
        }`,
        email: user[0].email,
        rol: user[0].role.name,
        permisos: roles,
      },
      process.env.PASSSECRET
    );
    return res.json({ user, token });
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}

//crear usuario
export async function createUser(req, res) {
  let body = req.body;
  try {
    let { user } = body;
    let obj = await SchemaUserCreate.validate({ ...user });
    comparateError(obj);
    let validateUser = await getUser({ email: obj.value.email });
    if (!isEmpty(validateUser)) throw new Error("Email ya  existe");
    obj.value.password = await bcrypt.hashSync(obj.value.password, 10);
    let userNew = await addUser({ ...obj.value });
    return res.json({ message: "Usuario fue creado" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}
//actulizar password
export async function updatePassword(req, res) {
  let body = req.body;

  try {
    let { updpass } = body;
    let obj = await SchemaUserPassword.validate({ ...updpass });
    comparateError(obj);
    obj.value.password = await bcrypt.hashSync(obj.value.password, 10);
    let upd = await updateUser({ ...obj.value }, { id: 7 });
    return res.json({ message: "Clave Actualizada" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}

//actualziar datos del usuario exepto la clave
export async function updateUsers(req, res) {
  let body = req.body;
  try {
    let { upduser } = body;
    let obj = await SchemaUserUpdate.validate({ ...upduser });
    comparateError(obj);
    let upd = await updateUser({ ...obj.value }, { id: 7 });
    return res.json({ message: "Datos actualizados" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + erros });
  }
}
