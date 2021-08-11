import axios from "axios";

const KEY = [
  "AIzaSyA1ZBd213Vjp6zU7GhKx07MLvGQkbfYZjk",
  "AIzaSyD3yfKj0YYcxmNBz1YeNY-4BSHttWdtzcs",
  "AIzaSyDYdQX5sZYw8QKv3O2VNXMmVzyjbYQF3Tk",
  "AIzaSyAp6l7Rju0aTuVaAOGMEgmVVLChjKgs5dk",
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}
// This gets a random element from the search terms array
let myKey = KEY[Math.floor(random(0, KEY.length - 1))];

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: myKey,
  },
});
