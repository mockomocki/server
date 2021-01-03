const mongoose = require('mongoose');
var Movie = require('../models/movieinfoposted');
const fetch = require('node-fetch');
const apikey = '6000d3888cd1295a505f6786c114500a'
const { body,validationResult } = require('express-validator');
var title;
var date;
var poster;
let info = [];


// Display detail page for a specific Author.
exports.movie_detail = function(req, res, next) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${req.params.id}&page=1`,{
    method: 'get',
  })
  .then(function(response) {
    return response.json(); // pass the data as promise to next then block
  }).then(function(data) {
    info = []
    for(let i = 0; i < data.results.length; i++){
      if('https://image.tmdb.org/t/p/w92/' + data.results[i].poster_path != 'https://image.tmdb.org/t/p/w92/null'){
        id = data.results[i].id
        poster = 'https://image.tmdb.org/t/p/w92/' + data.results[i].poster_path
        title = data.results[i].original_title
        date = data.results[i].release_date
        info.push({'id': id, 'title': title, 'date': date, 'poster': poster})
      }
    }  
    res.json(info)
  })
  .catch(function(error) {
    console.log('Request failed', error)
  })

};

exports.movie_create_log = (req, res) => {   
    var movie = new Movie(
      {
       movietitle: req.body.movietitle,
        review: req.body.review,
        rating: req.body.rating,
      });
      console.log(movie)
  movie.save(function (err) {
    if (err) { return next(err); }
    // Successful - redirect to new author record.
    res.sendStatus(200);
});
}


          
 




