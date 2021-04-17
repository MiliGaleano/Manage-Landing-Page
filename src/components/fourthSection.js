import React from 'react'
import styled from 'styled-components'
import {Title, Button} from './firstSection'
import backgroundImgMobile from '../assets/bg-simplify-section-mobile.svg'

const breakpoint1 = 850;

const tablet = `@media (min-width: ${breakpoint1}px)`


const OrangeDiv = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: hsl(12, 88%, 59%);
    background-image: url(${backgroundImgMobile});
    background-size: cover;
    padding: 80px 0;

    ${tablet} {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        }
`;

const LastTitle = styled(Title)`
    color: white;
    width: 74%;
    margin-left: 13%;

    ${tablet} {
        width: 30%;
        margin-left: 10%;
        }
`;

const LastButton = styled(Button)`
    color: hsl(12, 88%, 59%);
    background-color: white;
    width: 42%;
    cursor:pointer;

    ${tablet} {
        width: 150px;
        margin-right: 10%;
        padding: 15px;
        }
`;

const FourthSection = () => {
    return(
        <OrangeDiv>
            <LastTitle>Simplify how your team works today.</LastTitle>
            <LastButton>Get Started</LastButton>
        </OrangeDiv>
    )
}

export default FourthSection