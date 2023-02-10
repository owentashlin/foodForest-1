import PostsList from "../../components/PostsList/PostsList";
import CreatePost from "../CreatePostPage/CreatePost";

export default function HomePage({
  posts,
  isCreatePost,
  setIsChanging,
  setIsCreatePost,
  userId,
  setIsNavBar,
  profile,
}) {
  return (
    <>
      {isCreatePost ? (
        <CreatePost
          profile={profile}
          setIsNavBar={setIsNavBar}
          setIsChanging={setIsChanging}
          setIsCreatePost={setIsCreatePost}
          userId={userId}
        />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
}
