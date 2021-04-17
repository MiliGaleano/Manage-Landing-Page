import styled, { createGlobalStyle } from 'styled-components'
import backgroundImgMobile from './assets/bg-simplify-section-mobile2.svg'
import backgroundImgTablet from './assets/bg-tablet-pattern2.svg'
import backgroundImgDesktop from './assets/bg-simplify-section-desktop2.svg'

const tabletStartWidth = 400
const desktopStartWidth = 1440

const mobile = `@media (max-width: ${tabletStartWidth}px)`
const tablet = `@media (min-width: ${tabletStartWidth}px) and (max-width: ${desktopStartWidth}px)`
const desktop = `@media (min-width: ${desktopStartWidth}px)`

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Be Vietnam', sans-serif;
        font-size: 16px;
        text-align:center;
    }
    .swiper-pagination-bullet {
        background-color: #FFF !important;
        border-color: hsl(12, 88%, 59%);
        border-width: 2px;
        border-style: solid;
        width: 6px;
        height: 6px;
    }   
    .swiper-pagination-bullet-active {
        background-color: hsl(12, 88%, 59%) !important;
    } 
`;

export const BackgroundHome = styled.div`
    width: 100%;
    min-height: 100vh;
    height: ${props => props.showMenu ? "100vh" : "auto"};
    overflow-y: hidden;

    ${mobile} {
            background: url(${backgroundImgMobile}) no-repeat;
            background-size: 100% auto;
        }
    ${tablet} {
            background: url(${backgroundImgTablet}) no-repeat;
            background-size: 100% auto;
        }
    ${desktop} {
            background: url(${backgroundImgDesktop}) no-repeat;
            background-size: 100% auto;
        }
`;
