const swaggerJsDoc = require('swagger-jsdoc');
const { updateMe, signUp } = require('./routes/auth');
const { User } = require('./routes/users');
const { Book } = require('./routes/book');
const { Patron } = require('./routes/patron');
const { Record } = require('./routes/Record');
const {
  DuplicateEmail,
  Error,
  Forbidden,
  NotFound,
  Unauthorized,
} = require('./components');

const options = {
  url: '',
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0',
      description:
        'This is an API simpel Auth made with Express and documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:7000/api',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        signUp,
        updateMe,
        User,
        Error,
        Book,
        Patron,
        Record,
      },
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter the token : abcde12345".',
        },
      },
      responses: {
        DuplicateEmail,
        Forbidden,
        NotFound,
        Unauthorized,
        201: {
          description: 'created',
        },
        200: {
          description: 'ok',
        },
        204: {
          description: 'No content',
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        403: {
          description: 'Forbidden',
        },
        404: {
          description: 'Not found',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },
  apis: ['./swagger/routes/*.js'],
};
const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;
