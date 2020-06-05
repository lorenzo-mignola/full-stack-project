const express = require('express');
const app = express();
const cors = require('cors');
const bookmarks = require('./routes/bookmarks');

app.use(cors());
app.use(express.json());

app.use('/bookmarks', bookmarks);

app.listen(8080, () => console.log('Server started at http://localhost:8080'));
