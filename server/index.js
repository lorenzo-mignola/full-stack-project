const express = require('express');
const app = express();
const cors = require('cors');
const bookmarks = require('./routes/bookmarks');

app.use(cors());
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT || 8081;

app.use('/bookmarks', bookmarks);
app.get('/', (_, res) => res.send(`Server is running on port ${SERVER_PORT}`));

app.listen(SERVER_PORT, () => console.log(`Server started at http://localhost:${SERVER_PORT}`));
