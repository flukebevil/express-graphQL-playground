var express = require("express");
const { ApolloServer } = require("apollo-server-express");
var { typeDefs, resolvers } = require("./src/models/graphql/query");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true
  },
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
