const mongoose = require('mongoose');

const connectionString = process.env.MONGO_STRING || 'mongodb://localhost:27017/bookmarks';

mongoose.connect(connectionString, {
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
