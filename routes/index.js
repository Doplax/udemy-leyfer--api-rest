const express = require('express');
const router = express.Router();
const fs = require('fs');
const PATH_ROUTES = __dirname

require('./tracks.js')

const removeFileExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeFileExtension(file)
    if (name !== 'index') {

        console.log('cargando indice de la ruta....');
        router.use(`/${name}`,require(`./${file}`))
    } else {

    }
})




module.exports = router