import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Profile from "../Profile/Profile";

export default function NavBar({ user, setUser, createPostHandler }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/profile">Profile</Link>
      &nbsp; | &nbsp; &nbsp; | &nbsp; Welcome, {user.name}
      <Link to="/">Home</Link>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Profile />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      <button onClick={createPostHandler}>Create Post</button>
    </nav>
  );
}
