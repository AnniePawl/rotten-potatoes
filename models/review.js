// const mongoose = require("mongoose");
//
// module.exports = mongoose.model("Review", {
// 	title: String,
// 	movieTitle: String,
// 	description: String,
// 	rating: Number,
// });


const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String,
  movieId: { type: String, required: true }
});

module.exports = Review
