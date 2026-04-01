const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Movie API Running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});