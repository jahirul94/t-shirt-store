import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
              <Outlet></Outlet>
              <Toaster />
        </div>
    );
};

export default Main;