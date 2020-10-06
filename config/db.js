const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongo db connected");
  } catch (err) {
    console.log("database error", err.message);
    process.exit(1);
  }
};
module.exports = connectdb;
