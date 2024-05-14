const Book = require('../models/bookModel');
const handlerFactory = require('../utils/handlerFactory');
exports.getbook = handlerFactory.getOne(Book);
exports.createbook = handlerFactory.createOne(Book);
exports.updatebook = handlerFactory.updateOne(Book);
exports.deletebook = handlerFactory.deleteOne(Book);
exports.getAllbook = handlerFactory.getAll(Book);
