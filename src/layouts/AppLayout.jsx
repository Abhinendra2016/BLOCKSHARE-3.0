import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/topbar/Topbar';
import { Favorite } from '@mui/icons-material';
import './AppLayout.css'; 

const AppLayout = () => {
  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>
        <div className="page container">
          <Outlet />
        </div>
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <p>Made By</p>
          <span className="heart-icon">
            <Favorite sx={{ fill: 'red' }} />
          </span>
          <p>Team Talented Tyrants</p>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;
