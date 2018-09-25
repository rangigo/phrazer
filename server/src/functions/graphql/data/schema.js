import { gql } from "apollo-server-express";

export default gql`
  input UserInput {
    fullName: String!
    email: String!
    password: String!
  }
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    createUser(fullName: String!, email: String!, password: String!): User
    updateUser(id: ID!, fullName: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`;
