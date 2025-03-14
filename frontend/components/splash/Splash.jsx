import React from 'react';
import Header from './Header';
import SplashFooter from './SplashFooter';
import ModalContainer from '../modal/ModalContainer';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="main-container">
                <Header history={history}/> 
                <ModalContainer />              

                <div id='splash-main-pic-container'>
                    <img src={window.splash_main_pic} id="splash-main-pic"/>
                </div>

                <SplashFooter history={history}/>
            </div>    
        )
    }
}

export default Splash;
