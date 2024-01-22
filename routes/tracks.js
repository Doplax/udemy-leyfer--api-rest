const express = require("express");
const router = express.Router();
const {validatorCreateItem} = require("../validators/tracks.js")
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks.js");

router.get("/",getItems);

router.post("/",createItem);


module.exports = router;
