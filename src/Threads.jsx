import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"; // Outlet をインポート

const Threads = () => {
  const [threads, setTreads] = useState([]);
  const [error, setError] = useState();
  const fetchThreads = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads?offset=0"
      );
      const data = await response.json();
      setTreads(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <h2>
        <Link to="/threads/new">スレッドをたてる</Link>
      </h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Threads;
