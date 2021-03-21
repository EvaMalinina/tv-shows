const express = require('express');
const cors = require("cors");
const app = express();
const port = 9000;
const data = require('./data.json');

let movieArr = [];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(movieArr.length > 0 ? movieArr : data);
})

app.post('/movie', (req, res) => {
  const newMovie = req.body;
  movieArr = data;
  movieArr.push({...newMovie, id: Date.now()});
  res.send({"Movie added!": movieArr});
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// const express = require('express');
// const cors = require("cors");
// const mongoose = require("mongoose");
// const moviesRouter = require('./routes/movies');
// const app = express();
// require('dotenv').config();
//
// app.use(cors());
// app.use(express.json());
//
// mongoose.connect(process.env.connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//
// app.use(moviesRouter);
// app.listen(9000, () => {
//   console.log('Server is running...')
// })
//
// module.exports = app;

