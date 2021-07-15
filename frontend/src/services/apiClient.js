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
    const filters2 = await ytsr.getFilters(filter1.url);
    const filter2 = filters2.get("Features").get("Live");
    const options = {
      pages: 2,
    };
    const searchResults = await ytsr(filter2.url, options);
    // searchResults.items
  }
  // async listPosts() {
  //     return await this.request({endpoint: `posts`, method: `GET`})
  // }
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
  async listNutritions(user) {
    return await this.request({
      endpoint: `nutrition`,
      method: `GET`,
      data: user,
    });
  }
  async createNutrition(nutrition) {
    return await this.request({
      endpoint: `nutrition`,
      method: `POST`,
      data: nutrition,
    });
  }
  async listSleeps(user) {
    return await this.request({ endpoint: `sleep`, method: `GET`, data: user });
  }
  async createSleep(sleep) {
    return await this.request({
      endpoint: `sleep`,
      method: `POST`,
      data: sleep,
    });
  }
  async listActivities(user) {
    return await this.request({
      endpoint: `activity`,
      method: `GET`,
      data: user,
    });
  }
  async createActivity(activity) {
    return await this.request({
      endpoint: `activity`,
      method: `POST`,
      data: activity,
    });
  }
  async fetchExerciseMinutes(user) {
    return await this.request({
      endpoint: `exercise/minute`,
      method: `GET`,
      data: user,
    });
  }
  async fetchNutritionCalories(user) {
    return await this.request({
      endpoint: `nutrition/calorie`,
      method: `GET`,
      data: user,
    });
  }
  async fetchLastSleep(user) {
    return await this.request({
      endpoint: `sleep/last`,
      method: `GET`,
      data: user,
    });
  }
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }
  async createPost(post) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: post,
    });
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
