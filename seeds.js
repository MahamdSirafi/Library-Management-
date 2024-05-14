const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const User = require('./models/userModel');
const admin = {
  name: 'admin',
  email: 'admin@book.com',
  password: '123454321',
  role: 'admin',
};
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(async (result) => {
    await User.create(admin);
    console.log('create admin is success');
  })
  .catch((err) => {
    console.log(err);
  });
