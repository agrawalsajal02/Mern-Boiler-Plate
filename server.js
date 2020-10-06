const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const db = require("./config/db");
const Port = process.env.PORT || 5000;
db();

app.use(express.json({ extended: true }));

//comment this portion after completetion of app
app.get("/", (req, res) => {
  res.send("API Running");
});

//define routers

// app.use("/api/users", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));

//always do down to all routers
//Serve Static assets in production
if (process.env.NODE_ENV === "production") {
  //Set the Static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(Port, () => {
  console.log(`server is started on port ${Port}`);
});
