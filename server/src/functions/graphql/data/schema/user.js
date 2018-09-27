import { gql } from "apollo-server-express";
import User from "./../../../model/PhUser";

export const typeDef = gql`
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
  }
  extend type Query {
    getUsers: [User]
  }
  type Mutation {
    createUser(fullName: String!, email: String!, password: String!): User
    updateUser(id: ID!, fullName: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`;

export const resolvers = {
  Query: {
    getUsers: () => {
      let result = User.find({})
        .exec()
        .then(users => {
          return users;
        })
        .catch(err => {
          console.log(err);
        });

      console.log(result);

      return result;
    }
  },
  Mutation: {
    createUser: (obj, args, context, info) => {
      console.log(args);
      const newUser = new User(args);
      newUser
        .save()
        .then(saveUser => {
          console.log(saveUser);
        })
        .catch(err => {
          console.log(err);
        });

      return newUser;
    },
    updateUser: (obj, args, context, info) => {
      const updatedUser = User.findByIdAndUpdate(args.id, args, {
        new: true,
        upsert: true
      })
        .exec()
        .catch(err => {
          console.log(err);
        });

      return updatedUser;
    },
    deleteUser: (obj, args, context, info) => {
      const removedUser = User.findByIdAndRemove(args.id)
        .exec()
        .catch(err => {
          console.log(err);
        });

      return removedUser;
    }
  }
};
