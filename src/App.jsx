import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [topLeftMenuOpen, setTopLeftMenuOpen] = useState(false);

  function hadleTopLeftMenuClick() {
    setTopLeftMenuOpen(!topLeftMenuOpen);
  }

  function func2() {
    console.log(this);
  }

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  function popupHandle() {
    setIsPopupOpened(!isPopupOpened);
  }

  function closeEsc(e) {
    if (e.code === "Escape") {
      setIsPopupOpened(false);
    }
  }

  useEffect(() => {
    isPopupOpened && window.addEventListener("keydown", closeEsc);
    return () => window.removeEventListener("keydown", closeEsc);
  }, [isPopupOpened]);

  return (
    <div className="app">
      <Layout props={{ hadleTopLeftMenuClick, func2, popupHandle }} />
      <Popup isOpen={isPopupOpened} />
    </div>
  );
};

export default App;
