import mongooseConfig from "./mongoose";
import * as functions from "firebase-functions";

const rootConfig = () => {
  mongooseConfig(functions.config().db);
};

export default rootConfig;
