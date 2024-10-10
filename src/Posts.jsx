import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
  const { threadId } = useParams();
  const [posts, setPosts] = useState([]);
  const [postsError, setPostsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`
      );
      const data = await response.json();
      // console.log("Fetched posts:", data);
      setPosts(data.posts);
    } catch (error) {
      setPostsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (threadId) {
      fetchPosts();
    }
  }, [threadId]);

  if (isLoading) return <div>読み込み中...</div>;
  if (postsError) return <div>エラー: {postsError}</div>;

  return (
    <div>
      <div className="create-post-container">
        <h2>
          <Link to={`/threads/${threadId}/new`}>投稿する</Link>
        </h2>
      </div>
      {posts.length === 0 ? (
        <p>まだ投稿がありません。</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.post}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
