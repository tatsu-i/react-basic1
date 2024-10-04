import "./App.css";
import Threads from "./Threads";
import RouterApp from "./RouterApp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateThread from "./CreateThread";

function RoutesLinks() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouterApp />}>
          <Route path="threads" element={<Threads />} />
          <Route path="threads/new" element={<CreateThread />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesLinks;
