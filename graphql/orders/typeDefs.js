const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require("graphql");


const OrdersType = new GraphQLObjectType({
    name: "Order",
    fields: () => ({
        id: { type: GraphQLInt},
        orderNumber: { type: GraphQLString},
        amount: {type : GraphQLInt},
        delivered: {type : GraphQLBoolean},
        createdAt: {type : GraphQLString},
        updateAt: {type : GraphQLString},
        user_id: {type : GraphQLInt},
    })
})


module.exports = OrdersType