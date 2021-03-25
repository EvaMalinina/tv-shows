const express = require('express');
const movieModel = require('../models/movie.model');
const app = express();

app.get('/', async (req, res) => {
  const movies = await movieModel.find({});

  try {
    res.send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/movie', async (req, res) => {
  const movie = new movieModel({
    img: req.body.movieUrl,
    name: req.body.title,
    desc: req.body.overview,
    category: req.body.genre.type,
    year: parseInt(req.body.startDate.substr(-4)),
    runtime: req.body.runtime
  });
  const dup = movieModel.findOne({name: req.body.name});

  try {
    // this did not work in Postman
    // if (!dup) {
      await movie.save();
      res.send(movie);
    // } else {
    //   console.log('The movie with such name already exist.')
    // }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/movie/:id', async (req, res) => {
  try {
    const movie = await movieModel.findByIdAndDelete(req.params.id)

    if (!movie) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

app.patch('/movie/:id', async (req, res) => {
  try {
    const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body)
    await movieModel.save()
    res.send(movie)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app
