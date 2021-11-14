const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const userRouter = require('./routes/user/userRouter');
const transactionsRouter = require('./routes/transactions/transactionsRouter')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', userRouter);

app.use('/transactions', transactionsRouter);

app.use((req, res) => {
    res
    .status(404)
    .json({ 
      status: "error", 
      code: 404, 
      message: "Not found" 
    })
  });
  
  app.use((err, req, res, next) => {
    res
    .status(500)
    .json({ 
      status: 'fail', 
      code: 500, 
      message: err.message 
    })
  });
  
  module.exports = app;