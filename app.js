
// The purpose of this project was to deepen my knowledge of Node.js through replicating a popular movie review website called, Rotten Tomatoes. This project helped me solidiy paradigms(?) like RESTful and Resourceful routing.
// Implement (?) CRUD (Creating, Reading, Updating, AND Deleting) a single review source.
// Also learned how to use MongoDB document based database with Express.js
// Tasks included

//Express JS -- lightweight web application framework


const express = require('express')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express()


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rotten-potatoes', { useMongoClient: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/reviews')(app)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
