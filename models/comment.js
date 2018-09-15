const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = mongoose.model('Comment', {
  title: String,
  content: String,
  reviewId: { type: Schema.Types.ObjectId, ref: 'Review' }
});

// const Comment = mongoose.model('Comment', {
//   title: String,
//   content: String
// });

module.exports = Comment
