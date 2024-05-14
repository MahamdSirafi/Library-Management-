const { create, update } = require('../controllers/RecordController');
const { protect, restrictTo } = require('../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(protect, restrictTo('employee'));
router.route('/borrow/:bookId/patron/:patronId').post(create);
router.route('/return/:bookId/patron/:patronId').put(update);
module.exports = router;
