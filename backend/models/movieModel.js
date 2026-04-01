const { poolPromise, sql } = require("../config/db");

exports.getAllMovies = async () => {
  const pool = await poolPromise;
  return pool.request().query(`
    SELECT m.movie_id, m.title, m.release_year, g.name AS genre, m.description
    FROM Movies m
    LEFT JOIN Genres g ON m.genre_id = g.genre_id
    ORDER BY m.release_year DESC
  `);
};

exports.searchByDirector = async (name) => {
  const pool = await poolPromise;
  return pool.request()
    .input("name", sql.VarChar, name)
    .query(`
      SELECT m.title, d.name AS director
      FROM Movies m
      JOIN Movie_Directors md ON m.movie_id = md.movie_id
      JOIN Directors d ON md.director_id = d.director_id
      WHERE d.name = @name
    `);
};

exports.getRatings = async () => {
  const pool = await poolPromise;
  return pool.request().query(`
    SELECT m.title, ROUND(AVG(r.rating),2) AS avg_rating, COUNT(*) AS total_reviews
    FROM Movies m
    LEFT JOIN Reviews r ON m.movie_id = r.movie_id
    GROUP BY m.movie_id, m.title
    ORDER BY avg_rating DESC
  `);
};

exports.addMovie = async (data) => {
  const pool = await poolPromise;
  return pool.request()
    .input("title", sql.VarChar, data.title)
    .input("year", sql.Int, data.release_year)
    .input("genre", sql.Int, data.genre_id)
    .input("desc", sql.VarChar, data.description)
    .query(`
      INSERT INTO Movies (title, release_year, genre_id, description)
      VALUES (@title, @year, @genre, @desc)
    `);
};