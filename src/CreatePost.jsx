import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [post, setPost] = useState({ post: "" });
  const { threadId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setPost({ post: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate(`/threads/${threadId}`);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <form id="createPost" onSubmit={handleSubmit}>
        <label htmlFor="createPost">投稿：</label>
        <input
          type="text"
          name="post"
          value={post.post}
          onChange={handleChange}
        />
        <input type="submit" value="投稿する" />
      </form>
    </div>
  );
};

export default CreatePost;
