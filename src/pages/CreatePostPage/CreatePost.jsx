import { useState, useEffect } from "react";
import * as posts from "../../utilities/posts-service";
import "./CreatePost.css";
import { IoCloseSharp } from "react-icons/io5";
import { RxPlus } from "react-icons/rx";
import { GrCircleInformation } from "react-icons/gr";

export default function CreatePost({
  userId,
  setIsCreatePost,
  setIsChanging,
  setIsNavBar,
  profile,
}) {
  const [isFreeChecked, setIsFreeChecked] = useState(false);
  const [isTradeChecked, setIsTradeChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    content: "",
    zipCode: profile.zipCode,
    price: "",
    contactInfo: "",
    free: isFreeChecked,
    willingToTrade: isTradeChecked,
    location: "",
    dateRange: "",
    timeRange: "",
    userId: userId,
  });

  useEffect(function () {
    setIsFreeChecked(false);
    setIsTradeChecked(false);
  }, []);

  async function formHandler(e) {
    e.preventDefault();
    posts.createPost(formData);
    setIsCreatePost(false);
    setIsChanging(true);
    setIsNavBar(true);
  }

  function inputHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsChanging(false);
    console.log(formData.title);
  }

  function checkboxFreeHandler(e) {
    e.target.checked = isFreeChecked;
    setIsFreeChecked(!isFreeChecked);
    console.log(isFreeChecked);
  }

  function checkboxTradeHandler(e) {
    e.target.checked = isTradeChecked;
    setIsTradeChecked(!isTradeChecked);
    console.log(isTradeChecked);
  }

  function closeCreateFormHandler(e) {
    setIsCreatePost(false);
    setIsNavBar(true);
  }

  return (
    <div>
      <form onSubmit={formHandler} action="">
        <div className="first-div">
          <button
            className="close-create-post"
            onClick={closeCreateFormHandler}
          >
            <IoCloseSharp className="close-create-post" />
          </button>
          <h3 className="create-listing-title">Create Listing</h3>
          <input className="post-btn" type="submit" value="Post" />
        </div>
        <div className="image-upload-container">
          <div className="image-upload">
            <RxPlus className="plus-image" />
          </div>
          <div className="image-upload">
            <RxPlus className="plus-image" />
          </div>
          <div className="image-upload">
            <RxPlus className="plus-image" />
          </div>
          <em>
            <span style={{ color: "grey" }}>Edit Photos</span>
          </em>
        </div>
        <input
          className="create-post-input"
          name="title"
          onChange={inputHandler}
          type="text"
          placeholder="Title*"
          value={formData.title}
        />
        <input
          className="create-post-input"
          name="price"
          onChange={inputHandler}
          type="text"
          placeholder="Price (optional)"
          value={formData.price}
        />
        <div className="switch-container">
          <label className=" switch form-switch">
            <input
              onChange={checkboxFreeHandler}
              // checked={!isFreeChecked}
              name="free"
              type="checkbox"
            />
            Free &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i></i>
          </label>
          <label className="switch form-switch">
            <input
              onChange={(e) => checkboxTradeHandler(e)}
              // checked={formData.willingToTrade}
              name="willingToTrade"
              type="checkbox"
            />
            Willing to Trade&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i></i>
          </label>
        </div>
        <textarea
          className="listing-description"
          name="content"
          onChange={inputHandler}
          type="text"
          placeholder="Write about your listing*"
          value={formData.content}
        />
        <div className="location-container">
          <input
            className="location-input"
            name="location"
            onChange={inputHandler}
            type="text"
            placeholder="Set pickup location"
            value={formData.location}
          />
          <GrCircleInformation className="location-info" />
        </div>
        <div className="date-time-container">
          <input
            className="date-time-input"
            name="dateRange"
            onChange={inputHandler}
            type="text"
            placeholder="Enter date available"
            value={formData.dateRange}
          />
          <input
            className="date-time-input"
            name="timeRange"
            onChange={inputHandler}
            type="text"
            placeholder="Enter time available"
            value={formData.timeRange}
          />
        </div>
      </form>
    </div>
  );
}
