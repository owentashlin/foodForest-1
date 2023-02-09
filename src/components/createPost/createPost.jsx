import { useState } from "react";
import * as posts from "../../utilities/posts-service";

export default function CreatePost({ userId, setIsCreatePost }) {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    content: "",
    zipCode: "",
    userId: userId,
  });

  async function formHandler(e) {
    e.preventDefault();
    posts.createPost(formData);
    setIsCreatePost(false);
  }

  function inputHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData.title);
  }

  return (
    <div>
      <h1>This is a form</h1>
      <form onSubmit={formHandler} action="">
        <input
          name="title"
          onChange={inputHandler}
          type="text"
          placeholder="title"
          value={formData.title}
        />
        <input
          name="imageUrl"
          onChange={inputHandler}
          type="text"
          placeholder="imageUrl"
          value={formData.imageUrl}
        />
        <input
          name="content"
          onChange={inputHandler}
          type="text"
          placeholder="content"
          value={formData.content}
        />
        <input
          name="zipCode"
          onChange={inputHandler}
          type="text"
          placeholder="zipcode"
          value={formData.zipCode}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
