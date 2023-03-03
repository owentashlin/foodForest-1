import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import NavBar from "../../components/NavBar/NavBar";
//import CreatePost from "../CreatePostPage/CreatePost";
import * as profiles from "../../utilities/profiles-service";
import * as posts from "../../utilities/posts-service";
import HomePage from "../../pages/HomePage/HomePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [profile, setProfile] = useState(null);
  const [nearbyPosts, setNearbyPosts] = useState([]);
  const [isChanging, setIsChanging] = useState(false);
  const [isNavBar, setIsNavBar] = useState(true);

  function createPostHandler() {
    setIsCreatePost(true);
    setIsNavBar(false);
  }

  useEffect(
    function () {
      if (user) {
        (async function () {
          const profile = await profiles.getProfile(user._id);
          setProfile(profile[0]);
          console.log(user._id);
          const allPosts = await posts.getPosts();
          let nearbyPosts = allPosts.filter((post) => {
            return (
              post.zipCode.slice(0, 2) ===
              profile[0].zipCode.toString().slice(0, 2)
            );
          });
          setNearbyPosts(nearbyPosts);
        })();
        (async function () {})();
      }
    },
    [user, isChanging]
  );

  return (
    <main className="App">
      <div>
        {user ? (
          <>
            {!profile ? (
              <ProfilePage
                setIsNavBar={setIsNavBar}
                setProfile={setProfile}
                setIsChanging={setIsChanging}
                posts={nearbyPosts}
                userId={user._id}
                profile={profile}
                isChanging={isChanging}
              />
            ) : (
              <>
                {isNavBar && (
                  <NavBar
                    zipcode={profile.zipCode}
                    createPostHandler={createPostHandler}
                    user={user}
                    setUser={setUser}
                  />
                )}
                <Routes>
                  <Route
                    path="/"
                    element={
                      <HomePage
                        profile={profile}
                        setIsNavBar={setIsNavBar}
                        setIsChanging={setIsChanging}
                        setIsCreatePost={setIsCreatePost}
                        userId={user._id}
                        isCreatePost={isCreatePost}
                        posts={nearbyPosts}
                      />
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProfilePage
                        setProfile={setProfile}
                        setIsChanging={setIsChanging}
                        posts={nearbyPosts}
                        userId={user._id}
                        profile={profile}
                        isChanging={isChanging}
                      />
                    }
                  />
                </Routes>
              </>
            )}
          </>
        ) : (
          <AuthPage user={user} setUser={setUser} />
        )}
      </div>
    </main>
  );
}
