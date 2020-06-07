import axios from "axios";

const server = process.env.SERVER || "http://localhost:8081";

// eslint-disable-next-line
export const getBookmarks = () => axios.get(`${server}/bookmarks/getAllBookmarks`);

export const addBookmark = newBookmark =>
  axios.post(`${server}/bookmarks/addBookmark`, newBookmark);

export const deleteBookmark = id => axios.delete(`${server}/bookmarks/${id}`);
