// const express = require('express');
// const cors = require("cors");
// const app = express();
// const port = 9000;
// const data = require('./data.json');
//
// let movieArr = [];
//
// app.use(cors());
// app.use(express.json());
//
// app.get('/', (req, res) => {
//   res.send(movieArr.length > 0 ? movieArr : data);
// })
//
// app.post('/movie', (req, res) => {
//   const newMovie = {
//     title: req.body.title
//   }
//   console.log(newMovie)
//   movieArr = data;
//   // const newMovieWithId = ({...newMovie, id: Date.now()});
//   movieArr.push({...newMovie, id: Date.now()});
//   res.send({...newMovie, id: Date.now()});
// })
//
// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`)
// })

'use strict'
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const moviesRouter = require("./routes/movies");
const app = express();
require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(express.json());


mongoose.Promise = global.Promise;
mongoose.connect(process.env.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // autoIndex: true, //this is the code I added that solved it all
  // keepAlive: true,
  // poolSize: 10,
  // bufferMaxEntries: 0,
  // connectTimeoutMS: 10000,
  // socketTimeoutMS: 45000,
  // family: 4, // Use IPv4, skip trying IPv6
  // useFindAndModify: false,
  // useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected!')
  },
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

app.use('/api', moviesRouter);

app.listen(9000, () => {
  console.log('Server is running...')
})

module.exports = app;

