import mongoose from "mongoose";

const mongooseConfig = ({ host, db, user, pass, port }) => {
  mongoose.connect(
    "mongodb://" + user + ":" + pass + "@" + host + ":" + port + "/" + db,
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
