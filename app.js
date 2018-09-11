
// The purpose of this project was to deepen my knowledge of Node.js through replicating a popular movie review website called, Rotten Tomatoes. This project helped me solidiy paradigms(?) like RESTful and Resourceful routing.
// Implement (?) CRUD (Creating, Reading, Updating, AND Deleting) a single review source.
// Also learned how to use MongoDB document based database with Express.js
// Tasks included

//Express JS -- lightweight web application framework

//Express Modules & Objects
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')


//Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rotten-potatoes', { useMongoClient: true });


//Routers ??
// const home = require("./controllers/home");
// const reviews = require("./controllers/reviews");
// const comments = require("./controllers/comments");


//Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Middleware, Route Configuration ``
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
// app.use('/', home);
// app.use('/reviews', reviews);
//

//Import Routes
const reviews = require('./controllers/reviews.js')(app)

//Import Review Model 
const Reviews = require('./models/review');

//Server Start
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
