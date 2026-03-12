const express = require("express");

const router = express.Router();

const {

createProduct,
getProducts,
deleteProduct

} = require("../controllers/productController");

router.post("/products",createProduct);

router.get("/products",getProducts);

router.delete("/products/:id",deleteProduct);

module.exports = router;