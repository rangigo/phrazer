import mongoose from "mongoose";

const mongooseConfig = db_url => {
  mongoose.connect(
    db_url,
    { useNewUrlParser: true }
  );

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Database connected.");
  });
};

export default mongooseConfig;
