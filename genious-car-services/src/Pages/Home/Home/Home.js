import React from 'react';
import Experts from '../Experts/Experts';

import Services from './../Services/Services';

import Banner from './../Banner/Banner.js'

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}
            <Banner></Banner>
            <Services></Services>

            <Experts></Experts>

        </div>
    );
};

export default Home;