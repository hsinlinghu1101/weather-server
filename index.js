const express = require('express');
const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');


// The GraphQL schema in string form
const typeDefs = `
type Query {
  weatherByCity(name: String!): Weather
  weatherByZip(zip: Float!): Weather
}

type Weather {
  timestamp: Int
  location: String
  temperature: Float
}
`;

// The resolvers
const resolvers = {
  Query: { 
    weatherByZip: (_, { zip }, { dataSources }) =>
      dataSources.weatherAPI.getWeather({ zip }),
    weatherByCity: (_, { city }, { dataSources }) =>
      dataSources.weatherAPI.getWeather({ city }),
  }
};
// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
// Initialize the app

const app = express();
app.use('/graphql', graphqlExpress({ schema }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
