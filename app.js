
// The purpose of this project was to deepen my knowledge of Node.js through replicating a popular movie review website called, Rotten Tomatoes. This project helped me solidiy paradigms(?) like RESTful and Resourceful routing.
// Implement (?) CRUD (Creating, Reading, Updating, AND Deleting) a single review source.
// Also learned how to use MongoDB document based database with Express.js
// Tasks included

//Express JS -- lightweight web application framework


const express = require('express')
const methodOverride = require('method-override')

const app = express()


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rotten-potatoes', { useMongoClient: true });

const Review = mongoose.model('Review', {
  title: String,
  movieTitle: String,
  description: String,
  ratingDropdown: Number
});


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


let reviews = [
  { title: "Great Review" },
  { title: "Next Review" }
]

// INDEX
app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})

app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

//Create
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review);
    res.redirect(`/reviews/${review._id}`);
  }).catch((err) => {
    console.log(err.message);
  })
})

//Show

app.get('/reviews/:id', (req, res) => {
  Review.findById(req.params.id).then((review) => {
    res.render('reviews-show', { review: review })
  }).catch((err) => {
    console.log(err.message);
  })
});

// Edit

app.get('/reviews/:id/edit', function (req, res) {
  Review.findById(req.params.id, function(err, review) {
    res.render('reviews-edit', {review: review});
  })
})

Review.find().then((reviews) => {
  // Code in here is executed when the promise resolves
})

// UPDATE
app.put('/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.redirect(`/reviews/${review._id}`)
    })
    .catch(err => {
      console.log(err.message)
    })
})

// DELETE
app.delete('/reviews/:id', function (req, res) {
  console.log("DELETE review")
  Review.findByIdAndRemove(req.params.id).then((review) => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})
