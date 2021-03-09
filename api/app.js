const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const moviesRouter = require('./routes/movies');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(moviesRouter);
app.listen(9000, () => {
  console.log('Server is running...')
})

module.exports = app;
