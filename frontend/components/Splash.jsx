import React from 'react';
import Header from './Header';
import SplashFooter from './SplashFooter';


const Splash = () => {

    return (
        <div>
            <div id="header-and-main-pic-container">
                <Header />

                <div id='splash-main-pic-container'>
                    <img src={window.splash_main_pic} id="splash-main-pic"/>
                </div>
            </div>

            <SplashFooter />
        </div>
    )
}

export default Splash;
