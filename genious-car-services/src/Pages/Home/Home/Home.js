import React from 'react';
import Experts from '../Experts/Experts';

import Services from './../Services/Services';

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}

            <Services></Services>

            <Experts></Experts>

        </div>
    );
};

export default Home;