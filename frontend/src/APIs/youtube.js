import axios from "axios";
const KEY = "AIzaSyAp6l7Rju0aTuVaAOGMEgmVVLChjKgs5dk"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
