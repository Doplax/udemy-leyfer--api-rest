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
        // Asumiendo que hay algún proceso asíncrono para obtener un item
        // const data = await algúnProcesoAsíncrono();
        // res.send({ data });
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
        // Asumiendo que hay algún proceso asíncrono para actualizar un item
        // const body = matchedData(req);
        // const data = await algúnProcesoAsíncrono({ body });
        // res.send({ data });
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
        // Asumiendo que hay algún proceso asíncrono para eliminar un item
        // const data = await algúnProcesoAsíncrono();
        // res.send({ data });
    } catch (error) {
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
