const express = require("express");
const router = express.Router();
const Bookmark = require("../models/bookmark");

// Ritorna tutti i preferiti
router.get("/getAllBookmarks", async (_, res) => {
  console.log("[GET] -> bookmarks/getAllBookmarks");
  const allBookmarks = await Bookmark.find({});
  res.send(allBookmarks);
});

// Ritorna solo un preferito
router.get(":id", async (req, res) => {
  const { id } = req.params;
  console.log(`[GET] -> bookmarks/getBookmark/${id}`);
  const bookmark = await Bookmark.findOne({ _id: id });
  res.send(bookmark);
});

router.get("/findBookmark", async (req, res) => {
  const { search } = req.query;
  console.log(`[GET] -> bookmarks/findBookmark -> ${search}`);
  const regex = new RegExp(search, "ig");
  const bookmark = await Bookmark.find().or([{ name: regex }, { link: regex }]);
  res.send(bookmark);
});

// Aggiunge un preferito
router.post("/addBookmark", async (req, res) => {
  const { body } = req;
  console.log(`[POST] -> bookmarks/addBookmark -> ${JSON.stringify(body)}`);
  const newBookmark = await Bookmark.create({ ...body });
  res.send(newBookmark);
});

// Modifica un preferito
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(`[PUT] -> bookmarks/${id} -> ${JSON.stringify(body)}`);
  try {
    if (!body.hasOwnProperty("name") || !body.hasOwnProperty("link")) {
      throw new Error({
        error: "Body not available",
        message: `JSON body must be like 
      {
        name: "",
        link: ""
      }`
      });
    }

    const { ok } = await Bookmark.updateOne({ _id: id }, { ...body });
    if (!ok) {
      throw new Error({ message: "Error during edit" });
    }

    const bookmarkUpdated = await Bookmark.findOne({ _id: id });
    res.send(bookmarkUpdated);
  } catch (error) {
    res.sendStatus(500);
    res.send(error);
  }
});

// Elimina un preferito
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`[DELETE] -> bookmarks/${id}`);
  const { ok } = await Bookmark.deleteOne({ _id: id });
  if (ok) {
    res.send(`Bookmark with id:${id} deleted`);
  } else {
    res.sendStatus(500);
    res.send("Error during delete");
  }
});

module.exports = router;
