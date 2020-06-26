var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productsSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    price : {
        type: Number,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = productsSchema;