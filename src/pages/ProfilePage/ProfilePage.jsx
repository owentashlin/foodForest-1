import { useState, useEffect } from "react";
import * as profiles from "../../utilities/profiles-service";

export default function ProfilePage({ userId, profile }) {
  //   const [profile, setProfile] = useState(null);

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

  //   useEffect(
  //     function () {
  //       (async function () {
  //         const profile = await profiles.getProfile(userId);
  //         setProfile(profile);
  //         console.log(profile);
  //       })();
  //     },
  //     [userId]
  //   );
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
        <div>
          <p>Username: {profile[0].username}</p>
          <p>Contact Info: {profile[0].contactInfo}</p>
          <p>Zipcode: {profile[0].zipCode}</p>
          <p>Profile Picture: {profile[0].profilePicture}</p>
        </div>
      )}
    </>
  );
}
