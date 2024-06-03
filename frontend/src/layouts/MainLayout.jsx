import React from 'react';
import Navbar from '../Components/home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/home/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;