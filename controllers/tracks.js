const { tracksModel } = require('../models');
const { matchedData } = require('express-validator');
const handleHttpError = require('../utils/handleError');

/**
 * Obtener lista de items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
}

/**
 * Obtener un item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const req = matchedData(req);
        const {id} = req
        const data = await tracksModel.findById({id})
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM');
    }
}

/**
 * Crear un item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await tracksModel.create({ body });
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }
}

/**
 * Actualizar un item
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
         const { id, ...body} = matchedData(req);
         const data = await tracksModel.findOneAndUpdate({ id, body });
         res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATE_ITEM');
    }
}

/**
 * Eliminar un item
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const req = matchedData(req);
        const {id} = req
        const data = await tracksModel.delete({_id:id})
        res.send({ data });

    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_DELETE_ITEM');
    }
}

module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
};
