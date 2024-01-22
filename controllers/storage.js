const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL

/** 
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data})
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body, file } = req;
    console.log(file);
    const fileData = {
        dilename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data})
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}



module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}