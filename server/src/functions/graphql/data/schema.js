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
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): User
  }
`;
