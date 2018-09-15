
const express = require('express')
const Comment = require('../models/comment')
const app = express()

function comments(app) {
    // CREATE Comment
    app.post('/reviews/:reviewId/comments/new', (req, res) => {
      Comment.create(req.body).then(comment => {
        res.redirect('/reviews/' + comment.reviewId)
      }).catch((err) => {
        console.log(err.message)
      })
    })
}

module.exports = comments;

  // NEW Comment
  app.post('/reviews/comments', (req, res) => {
    res.send('reviews comment')
  })
