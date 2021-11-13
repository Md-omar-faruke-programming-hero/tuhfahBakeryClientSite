import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Offer from '../Offer/Offer';
import SellProduct from '../SellProduct/SellProduct';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <SellProduct></SellProduct>
            <Offer></Offer>
            <Testmonial></Testmonial>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;