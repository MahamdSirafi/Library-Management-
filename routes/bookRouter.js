const bookController = require('../controllers/bookController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(bookController.getAllbook)
  .post(authMiddlewers.restrictTo('employee'), bookController.createbook);
router
  .route('/:id')
  .get(bookController.getbook)
  .put(authMiddlewers.restrictTo('employee'), bookController.updatebook)
  .delete(authMiddlewers.restrictTo('employee'), bookController.deletebook);
module.exports = router;
