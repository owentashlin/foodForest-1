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
import PostsList from "../../components/PostsList/PostsList";
import HomePage from "../../pages/HomePage/HomePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [profile, setProfile] = useState(null);
  const [nearbyPosts, setNearbyPosts] = useState([]);
  const [isChanging, setIsChanging] = useState(false);

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
          console.log(allPosts);
          let nearbyPosts = allPosts.filter((post) => {
            return (
              post.zipCode.slice(0, 2) ===
              profile[0].zipCode.toString().slice(0, 2)
            );
          });
          console.log(nearbyPosts);

          setNearbyPosts(nearbyPosts);
        })();
        (async function () {})();
      }
    },
    [user, isChanging]
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
            <CreatePost
              setIsChanging={setIsChanging}
              setIsCreatePost={setIsCreatePost}
              userId={user._id}
            />
          )}
          <Routes>
            <Route path="/" element={<HomePage posts={nearbyPosts} />} />
            <Route
              path="/profile"
              element={
                <ProfilePage
                  posts={nearbyPosts}
                  userId={user._id}
                  profile={profile}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
