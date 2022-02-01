const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
  try {
    const bookmarks = await db.any("SELECT * from bookmarks");

    return bookmarks;
  } catch (error) {
    return error;
  }
};

const getBookMark = async (id) => {
  try {
    const bookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);

    return bookmark;
  } catch (error) {
    return error;
  }
};

const createBookMark = async (bookmark) => {
  const { name, url, category, is_favorite } = bookmark;
  const newBookmark = await db.one(
    "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, url, category, is_favorite]
  );

  return newBookmark;
};

module.exports = { createBookMark, getAllBookmarks, getBookMark };
