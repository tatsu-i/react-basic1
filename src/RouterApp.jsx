import React from "react";
import { Link, Outlet } from "react-router-dom";

const RouterApp = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to="/threads">掲示板</Link>
        </h1>
      </header>
      <Outlet />
    </div>
  );
};

export default RouterApp;
