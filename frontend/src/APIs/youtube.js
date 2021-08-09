import axios from "axios";
const KEY = "AIzaSyA1ZBd213Vjp6zU7GhKx07MLvGQkbfYZjk"; // mention your youtube API key here!

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
