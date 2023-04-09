import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import Popup from "./components/Popup/Popup";

const App = () => {

  return (
    <div className="app">
      <Layout />
      <Popup />
    </div>
  );
};

export default App;
