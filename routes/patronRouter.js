const patronController = require('../controllers/patronController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(patronController.getAllpatron)
  .post(patronController.createpatron);
router
  .route('/:id')
  .get(patronController.getpatron)
  .put(patronController.updatepatron)
  .delete(patronController.deletepatron);
module.exports = router;
