import "./App.css";
import Threads from "./Threads";
import RouterApp from "./RouterApp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateThread from "./CreateThread";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

function RoutesLinks() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouterApp />}>
          <Route path="threads" element={<Threads />} />
          <Route path="threads/new" element={<CreateThread />} />
          <Route path="threads/:threadId" element={<Posts />} />
          <Route path="threads/:threadId/new" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesLinks;
