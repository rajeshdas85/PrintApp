const express = require('express');
const router = express.Router();
const productService = require('./product.service');
// routes
router.post('/addProduct', addProduct);
router.get('/', getAllProducts);
router.delete('/:id', deleteProduct);
module.exports = router;

function addProduct(req, res, next) {
    productService.addProduct(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAllProducts(req, res, next) {
    productService.getAllProducts()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function deleteProduct(req, res, next) {
    productService.deleteProduct(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

