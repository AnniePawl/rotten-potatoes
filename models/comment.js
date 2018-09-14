const mongoose = require('mongoose')
<<<<<<< HEAD
const Schema = mongoose.Schema

const Comment = mongoose.model('Comment', {
  title: String,
  content: String,
  reviewId: { type: Schema.Types.ObjectId, ref: 'Review' }
=======

const Comment = mongoose.model('Comment', {
  title: String,
  content: String
>>>>>>> fe4fd94a183f49c675caa2baabf142f51a0b1c04
});

module.exports = Comment
