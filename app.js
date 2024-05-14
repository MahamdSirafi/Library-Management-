const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const AppError = require('./utils/appError');
const errorGlobal = require('./controllers/errorController');
// Start express app
const app = express();
// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());
app.options('*', cors());
// app.options('/api/v1/resource', cors());
// Set security HTTP headers
app.use(helmet());
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());
app.use(compression());
const userRouter = require('./routes/userRoutes');
const RecordRouter = require('./routes/RecordRouter');
const patronRouter = require('./routes/patronRouter');
const bookRouter = require('./routes/bookRouter');

// 3) ROUTES
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api', RecordRouter);
app.use('/api/patrons', patronRouter);
app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);
//في حال طلب مورد غير موجود
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(errorGlobal);

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
//4)
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Example app listening at http://localhost:${process.env.PORT}
Example app listening at http://localhost:${process.env.PORT}/docs`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
