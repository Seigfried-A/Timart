const express = require('express');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const db = require('./config/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
db.init()

const userMutations  = require("./graphql/user/mutations")
const userQuery = require("./graphql/user/query")
const orderMutations = require("./graphql/orders/mutations")
const orderQuery = require("./graphql/orders/query")
const { Order } = require("./models/orders");
const { User } = require('./models/users');

User.hasMany(Order, {
  as: "orders",
  foreignKey: "user_id",
  allowNull: false,
});
 
Order.belongsTo(User, {
  as: 'user'
}) 

const Query = new GraphQLObjectType({
    name: 'query',
    fields: {
        ...userQuery, ...orderQuery
    }
})


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...userMutations, ...orderMutations
  })
});


app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
        query: Query,
        mutation: Mutation
})
}))

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});