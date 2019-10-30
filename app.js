require("dotenv").config();

const graphqlHTTP = require("express-graphql");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
const graphQLSchema = require("./graphql/schemas");
const graphQLResolvers = require("./graphql/resolvers");

app.use(express.json());
app.use("*", cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: graphQLSchema,
    rootValue: graphQLResolvers
  })
);

const uri = process.env.MONGO_DB;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`the server is running on ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
