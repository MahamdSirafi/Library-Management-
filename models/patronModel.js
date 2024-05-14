const mongoose = require('mongoose');
const patronSchema = new mongoose.Schema(
  {
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    phone: {
      required: [true, 'must enter phone'],
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Patron = mongoose.model('Patron', patronSchema);
module.exports = Patron;
