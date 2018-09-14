<<<<<<< HEAD

const Comment = require('../models/comment')

function comments(app) {
    // CREATE Comment
    app.post('/reviews/comments', (req, res) => {
      Comment.create(req.body).then(comment => {
        res.redirect(`/reviews/${comment.reviewId}`)
      }).catch((err) => {
        console.log(err.message)
      })
    })
}

module.exports = comments;
=======
export default function (app) {

  // NEW Comment
  app.post('/reviews/comments', (req, res) => {
    res.send('reviews comment')
  })

}
>>>>>>> fe4fd94a183f49c675caa2baabf142f51a0b1c04
