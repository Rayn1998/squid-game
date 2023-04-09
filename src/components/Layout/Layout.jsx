import { Routes, Route } from 'react-router-dom';

import Header from "../Header/Header";
import Main from "../Main/Main";
import Admin from "../Admin/Admin";

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      {children}
    </div>
  );
};

export default Layout;
