import React from 'react';
import Cities from './Cities';
import Footer from './Footer';

const SplashFooter = () => {

    return (
        <div>
            <div id="white-space-above-cities"></div>
            <Cities />
            <div id="white-space-below-cities"></div>
            <Footer />
        </div>
    )
}

export default SplashFooter;
