const express = require("express");
const router = express.Router();

const subcategoryController = require("../controllers/subcategoryController");

router.get("/", subcategoryController.getSubcategories);
router.post("/", subcategoryController.addSubcategory);

module.exports = router;
