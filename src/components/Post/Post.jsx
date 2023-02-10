import "./Post.css";

export default function Post({ post }) {
  return (
    <>
      <div>
        <div className="post-container">
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.price}</p>
          <p>{post.contactInfo}</p>
        </div>
        <div className="image-container">
          <img
            style={{ margin: "10px" }}
            width="170px"
            height="140px"
            src={post.imageUrl}
            alt=""
          />
          <img
            style={{ margin: "10px" }}
            width="170px"
            height="140px"
            src={post.imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="separator"></div>
    </>
  );
}
