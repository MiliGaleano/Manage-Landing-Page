import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import backgroundImgMobile from './assets/bg-simplify-section-mobile.svg'
// import backgroundImgTablet from './assets/bg-tablet-pattern.svg'
// import backgroundImgDesktop from './assets/bg-simplify-section-desktop.svg'
import {GlobalStyles} from './styledComponents'

ReactDOM.render(
    <div>
        <GlobalStyles />
        <App />
    </div>
, document.getElementById('root'));
