const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookmarks', {
  autoCreate: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookmarkSchema = new mongoose.Schema({
  name: String,
  link: String,
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
