import React from 'react';
import Header from './Header';
import SplashFooter from './SplashFooter';
import ModalContainer from '../modal/ModalContainer';


const Splash = ({closeModal}) => {

    return (
        <div id="main-container">
            <Header history={history}/>
            <ModalContainer />              

            <div id='splash-main-pic-container'>
                <img src={window.splash_main_pic} id="splash-main-pic"/>
            </div>

            <SplashFooter />
        </div>
    )
}

export default Splash;
