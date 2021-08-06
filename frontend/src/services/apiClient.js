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
  async createForumPost(post) {
    return await this.request({
      endpoint: `forum`,
      method: `POST`,
      data: post,
    });
  }

  async deletePost(postId) {
    return await this.request({
      endpoint: `post/${postId}`,
      method: `DELETE`,
    });
  }
  async deleteForumPost(postId) {
    return await this.request({
      endpoint: `forum/${postId}`,
      method: `DELETE`,
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
  async createForumImage(image) {
    return await this.request({
      endpoint: `image/forum`,
      method: `POST`,
      data: image,
    });
  }

  // async listPosts() {
  //   return await this.request({ endpoint: `posts`, method: `GET` });
  // }

  async listAllPosts() {
    return await this.request({
      endpoint: `post/listPosts`,
      method: `GET`,
    });
  }

  async listAllPostsT() {
    return await this.request({
      endpoint: `post/listPostsT`,
      method: `GET`,
    });
  }

  async listAllPostsB() {
    return await this.request({
      endpoint: `post/listPostsB`,
      method: `GET`,
    });
  }

  async listAllPostsD() {
    return await this.request({
      endpoint: `forum/listPostsD`,
      method: `GET`,
    });
  }

  async listPosts(user) {
    return await this.request({
      endpoint: `post`,
      method: `GET`,
      data: user,
    });
  }

  async listPostsWithUser(myUser) {
    return await this.request({
      endpoint: `post/display/${myUser.id}`,
      method: `GET`,
    });
  }

  async listForumPosts(user) {
    return await this.request({
      endpoint: `forum`,
      method: `GET`,
      data: user,
    });
  }

  async searchPosts(q) {
    return await this.request({
      endpoint: `post/search?q=${q}`,
      method: `GET`,
    });
  }

  async searchForumPosts(q) {
    return await this.request({
      endpoint: `forum/search?q=${q}`,
      method: `GET`,
    });
  }

  async listPostWithId(productId) {
    return await this.request({
      endpoint: `post/${productId}`,
      method: `GET`,
    });
  }

  async listUserWithId(productId) {
    return await this.request({
      endpoint: `user/${productId}`,
      method: `GET`,
    });
  }

  async listForumPostWithId(productId) {
    return await this.request({
      endpoint: `forum/${productId}`,
      method: `GET`,
    });
  }
  async listCommentsWithPostId(postId) {
    return await this.request({
      endpoint: `post/${postId}/comments`,
      method: `GET`,
    });
  }
  async listForumCommentsWithPostId(postId) {
    return await this.request({
      endpoint: `forum/${postId}/comments`,
      method: `GET`,
    });
  }

  async createComment(postId, comment) {
    return await this.request({
      endpoint: `post/${postId}/comments`,
      method: `POST`,
      data: comment,
    });
  }

  async createForumComment(postId, comment) {
    return await this.request({
      endpoint: `forum/${postId}/comments`,
      method: `POST`,
      data: comment,
    });
  }

  async listLikesWithPostId(postId) {
    return await this.request({
      endpoint: `post/${postId}/likes`,
      method: `GET`,
    });
  }

  async listForumLikesWithPostId(postId) {
    return await this.request({
      endpoint: `forum/${postId}/likes`,
      method: `GET`,
    });
  }

  async createLike(postId) {
    return await this.request({
      endpoint: `post/${postId}/likes`,
      method: `POST`,
    });
  }

  async createForumLike(postId) {
    return await this.request({
      endpoint: `forum/${postId}/likes`,
      method: `POST`,
    });
  }

  async deleteLike(postId) {
    return await this.request({
      endpoint: `post/${postId}/likes`,
      method: `DELETE`,
    });
  }

  async deleteForumLike(postId) {
    return await this.request({
      endpoint: `forum/${postId}/likes`,
      method: `DELETE`,
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

  async updateUser(credentials) {
    return await this.request({
      endpoint: `user`,
      method: `PATCH`,
      data: credentials,
    });
  }

  async listUserByEmail(email) {
    return await this.request({
      endpoint: `user`,
      method: `GET`,
      data: email,
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
