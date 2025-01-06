import React from "react";
import HeaderStyle from "./Header.module.scss";

function Header() {
  return (
    <div>
      <h1 className={HeaderStyle.title}>CLARUS HOSPITAL</h1>
    </div>
  );
}

export default Header;
