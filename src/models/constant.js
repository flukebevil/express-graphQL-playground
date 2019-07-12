module.exports = {
  movie: {
    title: String,
    url_movie: String,
    url_cover: String,
    desc: String
  },

  movie_ql: `type Movie {
  _id: String,
  title: String,
  url_movie: String,
  url_cover: String,
  desc: String}`
};
