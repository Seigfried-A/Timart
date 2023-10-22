const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const OrdersType = require("../orders/typeDefs");
const { Order } = require("../../models/orders");
const { User } = require("../../models/Users");



const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    orders: {type: GraphQLList(OrdersType)}
  }),
});

User.hasMany(Order, {
  as: "orders",
  foreignKey: "user_id",
  allowNull: false,
});

Order.belongsTo(User, {
  as: "user",
}); 

module.exports = UserType