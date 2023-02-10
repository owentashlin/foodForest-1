export default function Post({ post }) {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.price}</p>
      <p>{post.contactInfo}</p>
      <img src={post.imageUrl} alt="" />
    </div>
  );
}
