const bcryptjs = require('bcryptjs');


/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const salt = 10 // Es un termino en criptografia para la aletoriedad del hash
    const hash = await bcryptjs.hash(passwordPlain , salt);
    return hash

}
/** */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}


module.exports  =  { encrypt , compare }