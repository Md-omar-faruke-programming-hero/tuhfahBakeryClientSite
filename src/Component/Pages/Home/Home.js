import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import SellProduct from '../SellProduct/SellProduct';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <SellProduct></SellProduct>

            
        </div>
    );
};

export default Home;