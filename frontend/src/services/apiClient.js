import axios from "axios";
var ytsr = require("ytsr");

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "rate_my_setup_token";
  }
  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }
  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }

  // Get youtube videos with searches
  async searchVideos(query) {
    // Get all the data about the videos and correct the query
    const filters1 = await ytsr.getFilters(query);
    const filter1 = filters1.get("Type").get("Video");
    const options = {
      pages: 2,
    };
    const searchResults = await ytsr(filter1.url, options);
    return searchResults;
  }
  async createPost(post) {
    return await this.request({
      endpoint: `post`,
      method: `POST`,
      data: post,
    });
  }
  async createTag(tag) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: tag,
    });
  }
  async createImage(image) {
    return await this.request({
      endpoint: `image`,
      method: `POST`,
      data: image,
    });
  }
  async listPosts() {
      return await this.request({endpoint: `posts`, method: `GET`})
  }
  async listExercises(user) {
    return await this.request({
      endpoint: `exercise`,
      method: `GET`,
      data: user,
    });
  }
  async createExercise(exercise) {
    return await this.request({
      endpoint: `exercise`,
      method: `POST`,
      data: exercise,
    });
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }
  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }
  async signupUser(credentials) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }
  async logoutUser() {
    this.setToken(null);
    localStorage.setItem(this.tokenName, "");
  }
}

export default new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
);
