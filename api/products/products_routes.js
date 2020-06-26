
var Products = require('./products_controller');

module.exports = function(router) {
    router.post('/create', Products.createProduct);
    router.get('/get', Products.getProducts);
    router.get('/get/:name', Products.getProduct);
    router.put('/update/:id', Products.updateProduct);
    router.delete('/remove/:id', Products.removeProduct);
}