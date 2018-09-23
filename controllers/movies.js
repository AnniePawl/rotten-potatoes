//Access Movie DB
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('d64812efe740b7c2bd7aeecca5ea1804')

//Reviews
const Reviews = require("../models/review")

module.exports = (app) => {

//ROOT SHOW Movies (Index)
app.get('/', (req, res) => {
  moviedb.miscNowPlayingMovies().then(response => {
      console.log(response)
    res.render('movies-index', { movies: response.results });
  }).catch(console.error)
});

 //SHOW One Movie 
app.get('/movies/:id', (req, res) => {
    moviedb.movieInfo({ id: req.params.id }).then(movie => { res.render('movies-show', { movie: movie }); }).catch(console.error) })

}
