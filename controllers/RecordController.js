const Record = require('../models/recordModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
exports.create = catchAsync(async (req, res, next) => {
  const doc = await Record.create({
    book: req.params.bookId,
    patron: req.params.patronId,
  });
  res.status(201).json({
    status: 'success',
    doc,
  });
});
exports.update = catchAsync(async (req, res, next) => {
  const doc = await Record.updateOne(
    {
      book: req.params.bookId,
      patron: req.params.patronId,
    },
    { return_date: Date.now() }
  );
  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    doc,
  });
});
