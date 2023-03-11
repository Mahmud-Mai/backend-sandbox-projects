require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.get('/', (req, res) => res.send('Jobs Api Main route'))


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// start server
const port = process.env.PORT || 3030;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();