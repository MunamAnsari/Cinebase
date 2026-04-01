const reviewModel = require("../models/reviewModel");

exports.addReview = async (req, res) => {
  try {
    await reviewModel.addReview(req.body);
    res.send("Review added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateReview = async (req, res) => {
  try {
    await reviewModel.updateReview(req.params.id, req.body);
    res.send("Review updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await reviewModel.deleteReview(req.params.id);
    res.send("Review deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};