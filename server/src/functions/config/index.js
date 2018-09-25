import mongooseConfig from "./mongoose";

const rootConfig = () => {
  mongooseConfig("mongodb://localhost/MyNewDB");
};

export default rootConfig;
