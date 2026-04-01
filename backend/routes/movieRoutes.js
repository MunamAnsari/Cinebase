const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getMovies);
router.get("/director", movieController.getByDirector);
router.get("/ratings", movieController.getRatings);
router.post("/", movieController.addMovie);

module.exports = router;