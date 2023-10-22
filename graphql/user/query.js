const { GraphQLInt } = require("graphql");
const  UserType  = require("./typeDef");
const { User } = require("../../models/users");




const getUser = { 
    type: UserType,
    args: { 
        id: { type: GraphQLInt}
    },
    resolve: async (obj, args, context, info) => {
        const user = await User.findByPk(args.id, {
            include: ["orders"]
        })
        return user
    }
}

module.exports = { getUser } 