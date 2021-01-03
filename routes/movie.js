var express = require('express');
var router = express.Router();

// Require controller modules.
var movie_controller = require('../controllers/movieroutes');


/// AUTHOR ROUTES ///
  // POST request for creating Author.
router.post('/post/movie', movie_controller.movie_create_log);

// GET request for one Author.
router.get('/movie/:id', movie_controller.movie_detail);


module.exports = router;