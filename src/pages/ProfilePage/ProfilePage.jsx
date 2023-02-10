import { useState, useEffect } from "react";
import * as profiles from "../../utilities/profiles-service";
import * as posts from "../../utilities/posts-service";

export default function ProfilePage({ userId, profile, posts }) {
  //   const [profile, setProfile] = useState(null);

  const userPosts = posts.filter((post) => post.userId === userId);

  const [formData, setFormData] = useState({
    zipCode: "",
    username: "",
    profilePicture: "",
    contactInfo: "",
    userId: userId,
  });

  async function formHandler(e) {
    e.preventDefault();
    profiles.createProfile(formData);
  }

  function inputHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function deletePostHandler(postId) {
    await posts.deletePost(postId);
  }

  return (
    <>
      {!profile ? (
        <div>
          <form onSubmit={formHandler} action="">
            <input
              name="zipCode"
              onChange={inputHandler}
              type="text"
              placeholder="zip code"
              value={formData.title}
            />
            <input
              name="username"
              onChange={inputHandler}
              type="text"
              placeholder="username"
              value={formData.imageUrl}
            />
            <input
              name="profilePicture"
              onChange={inputHandler}
              type="text"
              placeholder="profile picture"
              value={formData.content}
            />
            <input
              name="contactInfo"
              onChange={inputHandler}
              type="text"
              placeholder="contact info"
              value={formData.content}
            />
            <input type="submit" />
          </form>
        </div>
      ) : (
        <>
          <div>
            <p>Username: {profile[0].username}</p>
            <p>Contact Info: {profile[0].contactInfo}</p>
            <p>Zipcode: {profile[0].zipCode}</p>
            <p>Profile Picture: {profile[0].profilePicture}</p>
          </div>
          <div>
            {userPosts.map((post, i) => {
              console.log(userPosts);
              return (
                <>
                  <p key={i}>{post.title}</p>
                  <button onClick={() => deletePostHandler(post._id)}>X</button>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
