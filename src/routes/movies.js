const bcrypt = require('bcrypt');
const express = require('express');
const movies = require('../db/movies.json');
const SALT_ROUNDS = 10;
const moviesRouter = express.Router();

moviesRouter.get('/', (req, res) => {
   return res.send(movies)
});

module.exports = moviesRouter;
