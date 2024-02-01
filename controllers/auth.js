const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
const { usersModel } = require("../models");

/** Controlador para registrar un nuevo usuario.
 * Este controlador maneja la solicitud de registro de usuario. 
 * Primero, valida y limpia los datos de la solicitud utilizando `matchedData`.
 * Luego, encripta la contraseña del usuario usando `encrypt` y crea un nuevo usuario
 * en la base de datos con `usersModel.create`. Finalmente, genera un token de autenticación
 * para el usuario y envía los detalles del usuario y el token en la respuesta.
 *
 * @param {Object} req - Objeto de solicitud de Express. Debe incluir en su cuerpo
 *                       los campos necesarios para registrar un usuario, como el nombre,
 *                       correo electrónico y contraseña.
 * @param {Object} res - Objeto de respuesta de Express. Se utiliza para enviar la respuesta
 *                       al cliente.
 *
 * @example
 * // Ejemplo de cuerpo de solicitud:
 * {
 *   "username": "nuevoUsuario",
 *   "email": "usuario@example.com",
 *   "password": "contraseñaSegura123"
 * }
 *
 * @throws {Error} - Lanza un error si ocurre un problema durante el registro, por ejemplo,
 *                   si el usuario ya existe o si hay un error en la base de datos.
 */

const registerCtrl = async (req, res) => {
  try{
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
  
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.status(201)
    res.send({ data });
  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_REGISTER_USER")
  }
};

/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
  try{
    req = matchedData(req);
    const user = await usersModel.findOne({email:req.email})

    if(!user){
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return
    }

    const hashPassword = user.get('password');

    const check = await compare(req.password, hashPassword)

    if(!check){
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return
    }

    user.set('password', undefined, {strict:false}) // Para no devolver la password en la respuesta
    const data = {
      token: await tokenSign(user), // Devolvemos el token en vez del password
      user
    }

    res.send({data})


  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_LOGIN_USER")
  }
}

module.exports = { registerCtrl, loginCtrl };