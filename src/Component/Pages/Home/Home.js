import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import SellProduct from '../SellProduct/SellProduct';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <SellProduct></SellProduct>
            <Testmonial></Testmonial>

            
        </div>
    );
};

export default Home;