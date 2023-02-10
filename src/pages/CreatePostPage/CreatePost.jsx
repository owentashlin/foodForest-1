import { useState } from "react";
import * as posts from "../../utilities/posts-service";

export default function CreatePost({ userId, setIsCreatePost, setIsChanging }) {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    content: "",
    zipCode: "",
    price: "",
    contactInfo: "",
    userId: userId,
  });

  async function formHandler(e) {
    e.preventDefault();
    posts.createPost(formData);
    setIsCreatePost(false);
    setIsChanging(true);
  }

  function inputHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsChanging(false);
    console.log(formData.title);
  }

  function closeCreateFormHandler(e) {
    setIsCreatePost(false);
  }

  return (
    <div>
      <button onClick={closeCreateFormHandler}>X</button>
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
        <input
          name="price"
          onChange={inputHandler}
          type="text"
          placeholder="price"
          value={formData.price}
        />
        <input
          name="contactInfo"
          onChange={inputHandler}
          type="text"
          placeholder="contact"
          value={formData.contactInfo}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
