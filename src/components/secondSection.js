import React from 'react'
import styled from 'styled-components'
import {Text, Title, Button} from './firstSection'
// import {tablet, desktop} from './Header'

const breakpoint1 = 850;
const breakpoint2 = 1400;

const tablet = `@media (min-width: ${breakpoint1}px)`
const desktop = `@media (min-width: ${breakpoint2}px)`

const DivSecondSec = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    ${tablet} {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 80px;
        width: 90%;
        margin-left: 5%;
        }
`;

const FirstCont = styled.div`
    margin-top: 80px;
    width: 78%;
    margin-left: 11%;

    ${tablet} {
        margin-top: 0;
        width: 40%;
        margin-left: 0%;
        }
`;

export const NewTitle = styled(Title)`
    font-size: 1.6rem;
`;

const SecondCont = styled.div`
    width: 89%;
    margin-left: 11%;

    ${tablet} {
        width: 40%;
        margin-left: 0;
        margin-right: 6%;
        }
`;

const Items = styled.div`
    margin-top: 60px;
    background-color: hsla(12, 88%, 59%, 0.15);
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 60px;
    border-top-left-radius: 60px;

    ${tablet} {
        margin-top: 0;
        background-color: transparent;
        }
`;

const NewButton = styled(Button)`
    width: 18%;
    height: 30px;
    filter: none;
    padding: 0px;
    padding-bottom: 3px;
    margin-top: 0;

    &:hover {
        background-color: hsl(12, 88%, 59%);
        color: white;
        }
`;

const ItemsText = styled.h1`
    margin-left:5px;
    font-weight: 700;
    font-size: 0.95rem;
    padding-top: 1px;
    color: hsl(228, 39%, 23%);
    
`;

const NewText = styled(Text)`
    width: 90%;
    text-align: justify;

    ${tablet} {
        padding-left: 20%;
        margin-bottom: 40px;
        }
`;

const SecondSection = () => {
    return(
        <DivSecondSec>
            <FirstCont>
                <NewTitle>What’s different about Manage?</NewTitle>
                <Text>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</Text>
            </FirstCont>
            <SecondCont>
                <Items>
                    <NewButton>01</NewButton>
                    <ItemsText>Track company-wide progress</ItemsText>
                </Items>
                <NewText>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</NewText>
                <Items>
                    <NewButton>02</NewButton>
                    <ItemsText>Advanced built-in reports</ItemsText>
                </Items>
                <NewText>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</NewText>
                <Items>
                    <NewButton>03</NewButton>
                    <ItemsText>Everything you need in one place</ItemsText>
                </Items>
                <NewText>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</NewText>
            </SecondCont>
        </DivSecondSec>
    )
}

export default SecondSection