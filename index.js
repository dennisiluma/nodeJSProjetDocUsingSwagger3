const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const personRouter = require('./personRouter');

const app = express();

app.use('/tech-with-den', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use('/persons', personRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
