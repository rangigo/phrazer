import { gql } from "apollo-server-express";
import { typeDef as User } from "./schema/user";

const Query = gql`
  type Query {
    _empty: String
  }
`;

export default [Query, User];
