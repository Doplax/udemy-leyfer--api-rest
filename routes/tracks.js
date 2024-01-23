const express = require("express");
const router = express.Router();
const {validatorCreateItem , validatorGetItem} = require("../validators/tracks.js")
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks.js");

// Lista de Items
router.get("/",getItems);

// Obtener detalle del Item
router.get("/:id", validatorGetItem, getItem);

// Crear el Item
router.post("/", validatorCreateItem, createItem);

// Actualizar un registro
router.put("/:id", validatorCreateItem, updateItem)

module.exports = router;
