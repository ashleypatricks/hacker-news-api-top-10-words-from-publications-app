import React, { FC } from "react";

import "./Spinner.scss";

import spinnerLogo from "../../Assets/spinner.jpeg";

const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <img src={spinnerLogo} alt="spinner logo" />
    </div>
  );
};

export default Spinner;
