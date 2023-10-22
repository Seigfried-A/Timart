const { GraphQLString, GraphQLNonNull } = require("graphql");
const { User } = require("../../models/users");
const UserType  = require("./typeDef");
const bcrypt = require("bcrypt");
const joiSchema = require("../../utils/joi");

const createUser = {
  type: UserType,
  args: {
    username: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (obj, args, context, info) => {
    
     const userEmail = await User.findOne({ where: { email: args.email } });
     if (userEmail) {
       throw new Error(`${args.email} already exists`);
     }

    const { error, value } = await joiSchema.validate(args);
    if (error) {
      throw new Error(error);
    }

   
    args.password = await bcrypt.hash(args.password, 10);
    const user = await User.create(args);
    return user;
  },
};


module.exports = { createUser }