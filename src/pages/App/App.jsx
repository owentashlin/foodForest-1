import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import NavBar from "../../components/NavBar/NavBar";
import CreatePost from "../../components/createPost/CreatePost";
import * as profiles from "../../utilities/profiles-service";
import * as posts from "../../utilities/posts-service";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [profile, setProfile] = useState(null);
  const [allPosts, setAllPosts] = useState([]);

  function createPostHandler() {
    setIsCreatePost(true);
  }

  useEffect(
    function () {
      if (user) {
        (async function () {
          const profile = await profiles.getProfile(user._id);
          setProfile(profile);
          console.log(profile);
          const allPosts = await posts.getPosts();
          setAllPosts(
            allPosts.filter((post) => {
              return post.zipCode.slice(2, 4) === profile.zipCode;
            })
          );
        })();
        (async function () {})();
      }
    },
    [user]
  );

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar
            createPostHandler={createPostHandler}
            user={user}
            setUser={setUser}
          />
          {isCreatePost && (
            <CreatePost setIsCreatePost={setIsCreatePost} userId={user._id} />
          )}
          <Routes>
            <Route
              path="/profile"
              element={<ProfilePage userId={user._id} profile={profile} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
