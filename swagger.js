const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tech With Den',
      description: 'Swagger 3 Youtube Tutorial',
      version: '1',
    },
    components: {
      schemas: {
        Person: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
            age: {
              type: 'integer',
            },
          },
        },
      },
    },
  },
  apis: ['./*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
