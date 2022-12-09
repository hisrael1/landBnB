import React from 'react';
import Cities from './Cities';
import Footer from './Footer';

const SplashFooter = (props) => {

    return (
        <div id="splash-footer-container">
            <Cities history={props.history}/>
            <Footer />
        </div>
    )
}

export default SplashFooter;
