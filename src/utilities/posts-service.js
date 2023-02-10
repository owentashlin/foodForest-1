import sendRequest from "./send-request";

const BASE_URL = "/api/posts";

export async function createPost(postData) {
  return sendRequest(`${BASE_URL}/create`, "POST", postData);
}

export async function getPosts() {
  return sendRequest(`${BASE_URL}/`, "GET");
}

export async function deletePost(postId) {
  return sendRequest(`${BASE_URL}/${postId}`, "DELETE");
}
