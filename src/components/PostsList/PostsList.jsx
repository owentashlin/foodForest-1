import Post from "../Post/Post";

export default function PostsList({ posts }) {
  return (
    <div>
      {posts
        .map((post) => {
          return <Post post={post} />;
        })
        .reverse()}
    </div>
  );
}
