const { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLNonNull } = require("graphql");
const OrdersType = require("./typeDefs");
const orderNo = require('../../utils/orderNumber');
const { Order } = require("../../models/orders");



const createOrders = {
  type: OrdersType,
  args: {
    amount: { type: GraphQLNonNull(GraphQLInt)},
    createdAt: { type: GraphQLString},
    updateAt: { type: GraphQLString},
    user_id: { type: GraphQLNonNull(GraphQLInt)},
  },
  resolve: async (obj, args,context,info ) => {

    const checkId = await Order.findByPk(args.user_id)
    if (checkId === null) { 
      throw new Error("user id does not exist in database")
    }

    args.orderNumber = orderNo.randomId(6);
    args.delivered = false
    const order = await Order.create(args)
    return order
  }
};


module.exports = {createOrders}