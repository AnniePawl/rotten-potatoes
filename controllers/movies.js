
module.exports= (app) => {

//Access Movie DB

//Reviews
const Reviews = require("../models/review")

//ROOT SHOW Movies (Index)
app.get('/', (req, res) => {
  res.render('movies-index');
})
}


//SHOW One Movie
