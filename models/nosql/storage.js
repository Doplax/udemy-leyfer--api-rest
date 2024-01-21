const mongoose = require('mongoose')

const StorageScheme = new mongoose.Scheme({
    url:{type:String},
    filename:{type:Number},
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('storages',StorageScheme)