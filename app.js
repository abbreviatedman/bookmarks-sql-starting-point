const express = require("express");
const cors = require("cors");
const bookmarksController = require("./controllers/bookmarksController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/bookmarks", bookmarksController);

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Hello and welcome to bookmarks!");
});

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
