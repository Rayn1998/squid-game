import { useState } from "react";

import Layout from "./components/Layout/Layout";

const App = () => {
  const [topLeftMenuOpen, setTopLeftMenuOpen] = useState(false);

  function hadleTopLeftMenuClick() {
    setTopLeftMenuOpen(!topLeftMenuOpen);
  }

  function func2() {
    console.log(this);
  }

  return (
    <div className="app">
      <Layout props={{ hadleTopLeftMenuClick, func2 }} />
    </div>
  );
};

export default App;
