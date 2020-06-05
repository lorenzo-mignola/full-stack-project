var express = require('express');
var router = express.Router();

// Ritorna tutti i preferiti
router.get('/getAllBookmarks', (_, res) => {
  console.log('[GET] -> bookmarks/getAllBookmarks');
  res.send('getAllBookmarks');
});

// Ritorna solo un preferito
router.get('/getBookmark/:id', (req, res) => {
  const { id } = req.params;
  console.log(`[GET] -> bookmarks/getBookmark/${id}`);
  res.send(id);
});

router.get('/findBookmarkByName', (req, res) => {
  const { name } = req.query;
  console.log(`[GET] -> bookmarks/findBookmarkByName -> ${name}`);
  res.send(name);
});

// Aggiunge un preferito
router.post('/addBookmark', (req, res) => {
  const { body } = req;
  console.log(`[POST] -> bookmarks/addBookmark -> ${JSON.stringify(body)}`);
  res.send(body);
});

// Modifica un preferito
router.put('/editBookmark/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(`[PUT] -> bookmarks/editBookmark/${id} -> ${JSON.stringify(body)}`);
  res.send({ id, ...body });
});

// Elimina un preferito
router.delete('/deleteBookmark/:id', (req, res) => {
  const { id } = req.params;
  console.log(`[DELETE] -> bookmarks/deleteBookmark/${id}`);
  res.send(`bookmarks/deleteBookmark/${id}`);
});

module.exports = router;
