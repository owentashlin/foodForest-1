import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Profile from "../Profile/Profile";

import logo from "../../images/logo.png";
import { IoMdLogOut } from "react-icons/io";
//import { IoHomeOutline } from "react-icons/io5";

import "./NavBar.css";

export default function NavBar({ user, setUser, createPostHandler, zipcode }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div>
      <nav className="nav-bar">
        <div className="navbar-top">
          <div className="profile-link">
            <Link to="/profile">
              <Profile />
            </Link>
          </div>
          <div>
            <Link className="react-icon" to="/">
              <img className="logo-img" width="150px" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-top-end">
            <Link to="" onClick={handleLogOut}>
              <IoMdLogOut className="react-icon" />
            </Link>
          </div>
        </div>
        <div className="separator"></div>
        <div className="navbar-middle">
          <p className="update-loc">{zipcode}</p>
          <p className="update-loc">Update Location</p>
          <button className="create-listing-btn" onClick={createPostHandler}>
            Create Listing
          </button>
        </div>
        <div className="separator"></div>
      </nav>
    </div>
  );
}
