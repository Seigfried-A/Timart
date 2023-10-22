const { GraphQLInt } = require("graphql");
const { Order } = require("../../models/orders");
const OrdersType = require("./typeDefs");


const getOrders = {
    type: OrdersType,
    args: { id: {type: GraphQLInt} }
    ,
    resolve: async (obj, args, context, info ) => {
        const order = await Order.findByPk(args.id, {
            include: ['user']
        })
        return order
    }
}

module.exports = { getOrders }