import React, { FC } from "react";

import logo from "../../Assets/opc.png";
import "./Header.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="one planet crowd logo" />
      </div>
    </div>
  );
};

export default Header;
