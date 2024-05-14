const mongoose = require('mongoose');
const borrowing_recordSchema = new mongoose.Schema(
  {
    book: {
      required: [true, 'must enter book'],
      type: mongoose.Schema.ObjectId,
      ref: 'Book',
    },
    patron: {
      required: [true, 'must enter patron'],
      type: mongoose.Schema.ObjectId,
      ref: 'Patron',
    },
    borrowing_dates: {
      type: Date,
      default: Date.now(),
    },
    return_date: {
      type: Date,
    },
  },
  {
    versionKey: false,
  }
);
const Borrowing_record = mongoose.model(
  'Borrowing_record',
  borrowing_recordSchema
);
module.exports = Borrowing_record;
