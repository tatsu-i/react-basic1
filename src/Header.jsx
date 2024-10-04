import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">トップ</Link>
        <Link to="/create">スレッドをたてる</Link>
      </header>
    </div>
  );
};

export default Header;
