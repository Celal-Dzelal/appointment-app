import React from "react";
import HeaderStyle from "./Header.module.scss";

function Header() {
  return (
    <div>
      <h1 className={HeaderStyle.title}>
        <span className={HeaderStyle.titleTheme}>theme</span>
        <span className={HeaderStyle.titleHospital}>HOSPITAL</span>
      </h1>
    </div>
  );
}

export default Header;
