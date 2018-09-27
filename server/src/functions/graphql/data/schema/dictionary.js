import { gql } from "apollo-server-express";
import User from "./../../../model/PhUser";

export const typeDef = gql`
  type Dictionary {
    id: String!
    name: String
    user: User!
    phrases: [Phrase]
    nativeLanguage: String!
    foreignLanguage: String!
  }
  extend type Query {
    getDictionaries: [Dictionary]
  }
  type Mutation {
    createDictionary(
      name: String
      user: User!
      nativeLanguage: String!
      foreignLanguage: String!
    ): Dictionary
    updateDictionary(id: ID!, name: String, phrases: [Phrase]): Dictionary
    deleteDictionary(id: ID!): Dictionary
  }
`;

export const resolvers = {
  Query: {
    getDictionaries: () => {
      return null;
    }
  },
  Mutation: {
    createDictionary: (obj, args, context, info) => {
      return null;
    },
    updateDictionary: (obj, args, context, info) => {
      return null;
    },
    deleteDictionary: (obj, args, context, info) => {
      return null;
    }
  }
};
