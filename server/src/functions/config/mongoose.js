import mongoose from "mongoose";

const mongooseConfig = ({ host, db, user, pass, port }) => {
  let uri;

  if (!user || !pass) {
    uri = "mongodb://" + "@" + host + ":" + port + "/" + db;
  } else {
    uri = "mongodb://" + user + ":" + pass + "@" + host + ":" + port + "/" + db;
  }

  mongoose.connect(
    uri,
    {
      useNewUrlParser: true
    }
  );

  const dbConnection = mongoose.connection;

  dbConnection.on("error", console.error.bind(console, "connection error:"));
  dbConnection.once("open", function() {
    console.log("Database connected.");
  });
};

export default mongooseConfig;
