import { useState, useEffect } from "react";
import * as profiles from "../../utilities/profiles-service";
import * as postsAPI from "../../utilities/posts-service";
import uploadProfile from "../../images/uploadProfile.png";
import "./ProfilePage.css";

export default function ProfilePage({
  userId,
  profile,
  isChanging,
  setIsChanging,
}) {
  //   const [profile, setProfile] = useState(null);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(
    function () {
      (async function () {
        const posts = await postsAPI.getPosts();
        const userPosts = posts.filter((post) => post.userId === userId);
        setMyPosts([...userPosts]);
        console.log(profile);
      })();
    },
    [isChanging, profile, userId]
  );

  const [formData, setFormData] = useState({
    zipCode: "",
    username: "",
    profilePicture: "",
    contactInfo: "",
    farmStandName: "",
    farmStandDescription: "",
    userId: userId,
    day: "",
    month: "",
    year: "",
  });

  async function formHandler(e) {
    e.preventDefault();
    profiles.createProfile(formData);
    console.log(formData);
    setIsChanging(!isChanging);
  }

  function inputHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function deletePostHandler(postId) {
    await postsAPI.deletePost(postId);
    setIsChanging(true);
  }

  return (
    <>
      {!profile ? (
        <div className="form-container">
          <img className="upload-profile" src={uploadProfile} alt="" />
          <form className="form-style" onSubmit={formHandler} action="">
            <input
              className="profile-page-input"
              name="username"
              onChange={inputHandler}
              type="text"
              placeholder="Username*"
              value={formData.imageUrl}
            />
            <input
              className="profile-page-input"
              name="farmStandName"
              onChange={inputHandler}
              type="text"
              placeholder="Farmstand Name (optional)"
              value={formData.farmStandName}
            />
            <textarea
              className="farmstand-description"
              name="farmStandDescription"
              onChange={inputHandler}
              type="text"
              placeholder="Description of farmstand (optional)"
              value={formData.farmStandDescription}
            />
            <div className="dob-container">
              <p className="dob-question">What is your date of birth?</p>
              <div className="dob-inner-container">
                <div className="dob-component">
                  <label className="dob-label" htmlFor="day">
                    Day
                  </label>
                  <input
                    onChange={inputHandler}
                    placeholder="DD"
                    className="dob-input"
                    name="day"
                    type="text"
                    value={formData.day}
                  />
                </div>
                <div className="dob-component">
                  <label className="dob-label" htmlFor="month">
                    Month
                  </label>
                  <input
                    onChange={inputHandler}
                    placeholder="MM"
                    className="dob-input"
                    name="month"
                    type="text"
                    value={formData.month}
                  />
                </div>
                <div className="dob-component">
                  <label className="dob-label" htmlFor="year">
                    Year
                  </label>
                  <input
                    onChange={inputHandler}
                    placeholder="YYYY"
                    className="dob-input"
                    name="year"
                    type="text"
                    value={formData.year}
                  />
                </div>
              </div>
            </div>
            <input
              className="profile-page-input"
              name="zipCode"
              onChange={inputHandler}
              type="text"
              placeholder="Zipcode*"
              value={formData.zipCode}
            />
            <input
              className="profile-page-input"
              name="contactInfo"
              onChange={inputHandler}
              type="text"
              placeholder="Phone Number*"
              value={formData.contactInfo}
            />
            <div className="show-contact">
              {" "}
              <input type="checkbox" className="remember-me" />
              <p>Show contact details to other users</p>
            </div>
            <input className="submit-btn" type="submit" value="Save" />
          </form>
        </div>
      ) : (
        <>
          <div>
            <p>Username: {profile.username}</p>
            <p>Contact Info: {profile.contactInfo}</p>
            <p>Zipcode: {profile.zipCode}</p>
            <p>Profile Picture: {profile.profilePicture}</p>
          </div>
          <div>
            {myPosts.map((post, i) => {
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
