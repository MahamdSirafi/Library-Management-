const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
  {
    title: {
      required: [true, 'must enter title'],
      type: String,
    },
    author: {
      required: [true, 'must enter author'],
      type: String,
    },
    publication_year: {
      required: [true, 'must enter publication year'],
      type: Number,
    },
    ISBN: {
      required: [true, 'must enter ISBN'],
      type: String,
    },
  },
  {
    versionKey: false,
  }
);
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
