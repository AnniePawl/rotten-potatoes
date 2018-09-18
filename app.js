
// The purpose of this project was to deepen my knowledge of Node.js through replicating a popular movie review website called, Rotten Tomatoes. This project helped me solidiy paradigms(?) like RESTful and Resourceful routing.
// Implement (?) CRUD (Creating, Reading, Updating, AND Deleting) a single review source.
// Also learned how to use MongoDB document based database with Express.js
// Tasks included

//Express JS -- lightweight web application framework

//Express Modules & Objects
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

//Database
const mongoose = require('mongoose');


//Import Review Model
const Review = require('./models/review');
//Import Comment Model
const Comment = require ('./models/comment');

// const home = require("./controllers/home");

//Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Middleware, Route Configuration ``
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// app.use('/', home);
// app.use('/reviews', reviews);
//app.use('/reviews/comments', comments);

//Import Routes
const reviews = require('./controllers/reviews.js')(app);
const comment = require('./controllers/comments.js')(app);
// const comments = require('./controllers/comments.js')(app);

//Server Start

app.listen(port, () => {
	console.log("App listening on port 3000")
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rotten-potatoes', {useNewUrlParser: true});

module.exports = app;
// module.exports = app.listen(3000, () => {
//   console.log('App listening on port 3000!')
// })
