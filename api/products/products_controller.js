var Products = require('./products_dao');

exports.createProduct = function (req, res, next) {
    var product = {
        name: req.body.name,
        price: req.body.price,
    };

    Products.create(product, function(err, product) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Product created successfully"
        })
    })
}

exports.getProducts = function(req, res, next) {
    Products.get({}, function(err, products) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            products: products
        })
    })
}

exports.getProduct = function(req, res, next) {
    Products.get({name: req.params.name}, function(err, products) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            products: products
        })
    })
}

exports.updateProduct = function(req, res, next) {
    var product = {
        price:req.body.price
    }
    Products.update({_id: req.params.id}, product, function(err, product) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Price updated successfully"
        })
    })
}

exports.removeProduct = function(req, res, next) {
    Products.delete({_id: req.params.id}, function(err, product) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Product deleted successfully"
        })
    })
}