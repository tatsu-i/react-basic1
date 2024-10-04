import React, { useState } from "react";

const CreateThread = () => {
  const [threadTitle, setThreadTitle] = useState({ title: "" });

  const handleChange = (e) => {
    const { value } = e.target;
    setThreadTitle({
      ...threadTitle,
      title: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(threadTitle),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <form id="createThread" onSubmit={handleSubmit}>
        <label htmlFor="createThread">スレッド名：</label>
        <input
          type="text"
          name="title"
          value={threadTitle.title}
          onChange={handleChange}
        />
        <input type="submit" value="作成" />
      </form>
    </div>
  );
};

export default CreateThread;
