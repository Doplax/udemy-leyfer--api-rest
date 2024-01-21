const express = require('express')
const cors = require('cors')
const app = express()
const dbConect = require('./config/mongo')
require('dotenv').config()

app.use(cors()) // Evita el error de CORS

const PORT = process.env.PORT || 3000

app.use('/',require('./routes'))

app.listen(PORT, () => {
    console.log('Tu app esta lista por http://localhost:' + PORT);
})



dbConect()