import React from 'react'
import styled from 'styled-components'
import Illus from '../assets/illustration-intro.svg'

const breakpoint1 = 850;

const tablet = `@media (min-width: ${breakpoint1}px)`

const DivCont = styled.div`
    width: 94%;
    margin-left: 3%;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;

    ${tablet} {
        width: 90%;
        margin-left: 5%;
        margin-top: 50px;
        flex-direction: row-reverse;
        justify-content: space-between;
        }
`;

const Illustration = styled.img`
    width: 100%;

    ${tablet} {
        width: 40%;
        }
`;

const TextDiv = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${tablet} {
        width: 45%;
        margin-left: 0;
        align-items: flex-start;
        }
`;

export const Title = styled.h1`
    font-weight: 800;
    font-size: 2rem;
    color: hsl(228, 39%, 23%);
    line-height: 1.2;

    ${tablet} {
        text-align: left;
        }
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 15px;
    color: hsl(228, 39%, 23%);

    ${tablet} {
        text-align: left;
        }
`;

export const Button = styled.button`
    width: 54%;
    font-weight: 500;
    color: white;
    padding: 14px;
    margin-top: 30px;
    border-radius: 60px;
    border: none;
    outline:none;
    background-color: hsl(12, 88%, 59%);
    filter: drop-shadow(0px 8px 6px hsla(12, 88%, 59%, 0.6));
    cursor:pointer;

    &:hover{
        background-color: hsl(228, 39%, 23%);
        color: hsl(12, 88%, 59%);
    }

    ${tablet} {
        width: 110px;
        padding: 5px;
        font-size: 0.8rem;
        }
`;

const FirstSection = () => {
    return(
        <DivCont>
            <Illustration src={Illus}></Illustration>
            <TextDiv>
                <Title>Bring everyone together to build better products.</Title>
                <Text>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</Text>
                <Button>Get Started</Button>
            </TextDiv>
        </DivCont>
    )
}

export default FirstSection