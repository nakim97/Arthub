import axios from "axios";
const KEY = "AIzaSyD6Tblg1oK7m098cXNz6zkW8UQGTOb51ro"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});
