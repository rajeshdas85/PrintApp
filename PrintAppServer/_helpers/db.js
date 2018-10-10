const config = require('config.json');
const mongoose = require('mongoose');
//mongoose.connect(config.connectionString);
mongoose.connect(process.env.CUSTOMCONNSTR_MyConnectionString || config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Product: require('../products/product.model')
};