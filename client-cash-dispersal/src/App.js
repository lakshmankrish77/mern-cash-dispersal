import React from 'react';
import './App.css';

// import store from './redux/store';
// import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';

export default function App() {
  return (
    <React.StrictMode >
      <AppRouter />
    </React.StrictMode>
  );
}
