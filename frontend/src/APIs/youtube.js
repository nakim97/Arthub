import axios from "axios";
const KEY = "AIzaSyD3yfKj0YYcxmNBz1YeNY-4BSHttWdtzcs"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
