const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
    .then(() => console.log('Conexión Correcta'))
    .catch(err => console.log('Error de conexión', err));
}

module.exports = dbConnect;
