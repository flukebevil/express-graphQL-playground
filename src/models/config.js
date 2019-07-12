module.exports = {
  movie: {
    title: String,
    url_movie: String,
    url_cover: String,
    desc: String
  },

  user: {
    name: String,
    surname: String,
    age: Number,
    sex: String
  },

  movie_ql: `type Movie {
  _id: String,
  title: String,
  url_movie: String,
  url_cover: String,
  desc: String}`,

  user_ql: `type User {
    _id: String
    name: String
    surname: String
    age: Int
    sex: String
  }`
};
