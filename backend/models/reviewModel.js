const { poolPromise, sql } = require("../config/db");

exports.addReview = async (data) => {
  const pool = await poolPromise;
  return pool.request()
    .input("user", sql.Int, data.user_id)
    .input("movie", sql.Int, data.movie_id)
    .input("rating", sql.Int, data.rating)
    .input("text", sql.VarChar, data.review_text)
    .query(`
      INSERT INTO Reviews (user_id, movie_id, rating, review_text)
      VALUES (@user, @movie, @rating, @text)
    `);
};

exports.updateReview = async (id, data) => {
  const pool = await poolPromise;
  return pool.request()
    .input("id", sql.Int, id)
    .input("rating", sql.Int, data.rating)
    .input("text", sql.VarChar, data.review_text)
    .query(`
      UPDATE Reviews
      SET rating = @rating, review_text = @text
      WHERE review_id = @id
    `);
};

exports.deleteReview = async (id) => {
  const pool = await poolPromise;
  return pool.request()
    .input("id", sql.Int, id)
    .query(`DELETE FROM Reviews WHERE review_id = @id`);
};