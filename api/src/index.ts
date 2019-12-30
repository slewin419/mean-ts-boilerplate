import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000; // default port to listen

mongoose.connect("mongodb://mongo:27017", {useNewUrlParser: true});

const db = mongoose.connection;
db.once('open', function(){
  console.log('mongoose connected to mongo!');
});
db.on('error', () => {
  console.log('connection error!');
});

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
