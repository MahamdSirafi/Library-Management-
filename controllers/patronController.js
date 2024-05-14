const Patron = require('../models/patronModel');
const handlerFactory = require('../utils/handlerFactory');
exports.getpatron = handlerFactory.getOne(Patron);
exports.createpatron = handlerFactory.createOne(Patron);
exports.updatepatron = handlerFactory.updateOne(Patron);
exports.deletepatron = handlerFactory.deleteOne(Patron);
exports.getAllpatron = handlerFactory.getAll(Patron);
