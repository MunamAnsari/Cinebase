const movieModel = require("../models/movieModel");

exports.getMovies = async (req, res) => {
  try {
    const result = await movieModel.getAllMovies();
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getByDirector = async (req, res) => {
  try {
    const result = await movieModel.searchByDirector(req.query.name);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getRatings = async (req, res) => {
  try {
    const result = await movieModel.getRatings();
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addMovie = async (req, res) => {
  try {
    await movieModel.addMovie(req.body);
    res.send("Movie added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};