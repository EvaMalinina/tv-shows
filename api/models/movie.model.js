const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const MovieSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  name: {
    type: String,
    unique: true,
    index: true,
    required: true,
    trim: true,

  },
  desc: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  year: {
    type: Number,
    default: 2000,
    validate(value) {
      if (value < 0) throw new Error("Please provide valid year.");
    }
  },
  runtime: {
    type: Number,
    trim: true
  },
}, {
  collection: 'movies'
});

MovieSchema.plugin(uniqueValidator);

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
