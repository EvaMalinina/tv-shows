const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  desc: {
    type: String,
    required: true,
    trim: true
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
  }
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
