import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
// import Sidebar from '../components/Sidebar/Sidebar';
import MiniDrawer from '../components/Sidebar/SidebarMUI';

//General Pages
import { CashDepositPage } from '../pages/CashDepositPage';
import { CashWithdrawPage } from '../pages/CashWithdrawPage';
import { text_properties } from '../properties/text_config';

export const CashDispersalRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);  
  const [activeClick, setActiveClick] = useState(false);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      {/* <Sidebar toggle={sidebarToggle} setToggle={setSidebarToggle} active={setActiveClick} /> */}
      <MiniDrawer toggle={sidebarToggle} setToggle={setSidebarToggle} active={setActiveClick}  text_properties={text_properties}></MiniDrawer>

      <Routes>
        {/* GeneralPages(Limited) */}        
        
        <Route
          exact
          path="/deposit/*"
          element={<CashDepositPage toggle={sidebarToggle} text_properties={text_properties} />}
        />
        <Route
          exact
          path="/withdraw/*"
          element={<CashWithdrawPage toggle={sidebarToggle} text_properties={text_properties} />}
        />
      </Routes>
    </div>
  );
};
