import avatar from "../../images/avatar.png";

export default function Profile() {
  return <img style={avatarStyle} src={avatar} alt="" />;
}

const avatarStyle = {
  top: "1%",
  right: "1%",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};
