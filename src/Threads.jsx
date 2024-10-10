import "./App.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Threads = () => {
  const [threads, setTreads] = useState([]);
  const [threadError, setThreadError] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const fetchThreads = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads?offset=0"
      );
      const data = await response.json();
      setTreads(data);
    } catch (error) {
      setThreadError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  const goToPosts = (threadId) => {
    navigate(`/threads/${threadId}`);
  };

  if (isLoading) return <div>読み込み中...</div>;
  if (threadError) return <div>{threadError}</div>;

  return (
    <div className="main-container">
      <div className="create-thread-container">
        <h2>
          <Link className="create-thread" to="/threads/new">
            スレッドをたてる
          </Link>
        </h2>
      </div>
      <div className="threads-container">
        <ul>
          {threads.map((thread) => (
            <li
              className="thread-list"
              key={thread.id}
              onClick={() => goToPosts(thread.id)}
            >
              {thread.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Threads;
