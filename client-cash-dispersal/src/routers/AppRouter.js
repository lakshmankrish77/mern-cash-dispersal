import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { AuthRouter } from './AuthRouter';
import { CashDispersalRoutes } from './CashDispersalRoutes';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/*" element={<CashDispersalRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
