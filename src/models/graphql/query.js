var userModel = require("../users");
var movieModel = require("../movie");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var payload = require("../config");
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    user(name: String!, surname: String!, age: Int!, sex: String!): User
    get_users(id: String): User
    add_movie(
      title: String
      url_movie: String
      url_cover: String
      desc: String
    ): Movie
    get_movies: [Movie]
    hello: String
  }

  ${payload.user_ql}

  ${payload.movie_ql}
`;

const addUser = args => {
  return new userModel({
    name: args.name,
    surname: args.surname,
    age: args.age,
    sex: args.sex
  })
    .save()
    .then(value => value)
    .catch(err => console.log(err));
};

const getUsers = args =>
  userModel.findOne({ _id: new ObjectId(args.id) }).then(result => result);

const addMovie = args =>
  new movieModel({
    title: args.title,
    url_movie: args.url_movie,
    url_cover: args.url_cover,
    desc: args.desc
  })
    .save()
    .then(result => result);

const getMovie = _ => movieModel.find().then(res => res);

const resolvers = {
  Query: {
    user: (_, args) => addUser(args),
    get_users: (_, args) => getUsers(args),
    add_movie: (_, args) => addMovie(args),
    get_movies: getMovie,
    hello: () => "Hello world!"
  }
};

module.exports = { typeDefs, resolvers };
