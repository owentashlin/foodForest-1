import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import * as posts from "../../utilities/posts-service";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    content: "",
    userId: user._id,
  });

  async function formHandler(e) {
    e.preventDefault();
    posts.createPost(formData);
  }

  function inputHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData.title);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
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
              <input type="submit" />
            </form>
          </div>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
