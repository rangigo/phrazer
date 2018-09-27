import { merge } from "lodash";
import { resolvers as userResolvers } from "./schema/user";

const resolvers = {};

export default merge(resolvers, userResolvers);
