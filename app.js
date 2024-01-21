const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors()) // Evita el error de CORS

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Tu app esta lista por http://localhost: ' + PORT);
})