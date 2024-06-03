import React from 'react';
import Banner from '../Components/home/Banner';
import Products from '../Components/home/Products';
import Accordian from '../Components/home/Accordian';
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();
   
    return (
        <div>
            <Banner/>
            <Products data={data} />
            <Accordian/>
        </div>
    );
};

export default Home;