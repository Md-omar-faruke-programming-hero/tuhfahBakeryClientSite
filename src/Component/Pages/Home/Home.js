import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Offer from '../Offer/Offer';
import SellProduct from '../SellProduct/SellProduct';
import Testmonial from '../Testmonial/Testmonial';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <SellProduct></SellProduct>
            <Offer></Offer>
            <Testmonial></Testmonial>
            <Footer></Footer>
            <MessengerCustomerChat pageId="103613898856785" appId="1810778465781165"/>

            
        </div>
    );
};

export default Home;