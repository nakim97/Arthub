import axios from "axios";

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
  // async listPosts() {
  //   return await this.request({ endpoint: `posts`, method: `GET` });
  // }
  async listPosts(user) {
    return await this.request({
      endpoint: `post`,
      method: `GET`,
      data: user,
    });
  }
  async listPostWithId(productId) {
    return await this.request({
      endpoint: `post/${productId}`,
      method: `GET`,
    });
  }
  async listCommentsWithPostId(postId) {
    return await this.request({
      endpoint: `post/${postId}/comments`,
      method: `GET`,
    });
  }

  async createComment(comment) {
    return await this.request({
      endpoint: `post/${postId}/comments`,
      method: `POST`,
      data: comment,
    });
  }

  async listUserByEmail(email) {
    return await this.request({
      endpoint: `user`,
      method: `GET`,
      data: email,
    });
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
