const express = require("express");

const {
  getAllBookmarks,
  getBookMark,
  createBookMark,
} = require("../queries/bookmarks");

const bookmarks = express.Router();

bookmarks.get("/", async (_, response) => {
  console.log("GET request to /bookmarks");
  const allBookmarks = await getAllBookmarks();
  if (allBookmarks.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json(allBookmarks);
});

bookmarks.get("/:id", async (request, response) => {
  console.log("GET request to /bookmarks/:id");
  const bookmark = await getBookMark(request.params.id);
  response.status(200).json(bookmark);
});

bookmarks.post("/", async (request, response) => {
  const bookmark = await createBookMark(request.body);

  response.status(200).json(bookmark);
});

module.exports = bookmarks;
