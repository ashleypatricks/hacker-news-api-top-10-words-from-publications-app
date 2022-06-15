import React, { FC } from "react";

import "./App.scss";

import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Info />
    </div>
  );
};

export default App;
