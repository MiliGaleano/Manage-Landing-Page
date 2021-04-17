import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from './firstSection'
import icon1 from '../assets/icon-facebook.svg'
import icon2 from '../assets/icon-youtube.svg'
import icon3 from '../assets/icon-twitter.svg'
import icon4 from '../assets/icon-pinterest.svg'
import icon5 from '../assets/icon-instagram.svg'
import logo from '../assets/logo.svg'

const breakpoint1 = 850;

const tablet = `@media (min-width: ${breakpoint1}px)`

const DivFooter = styled.div`
    width: 100%;
    background-color: hsl(233, 12%, 13%);
    display: flex;
    flex-direction: column;
    align-items: center;

    ${tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        }
`;

const DivItems = styled.div`
    margin-top: 60px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    ${tablet} {
        width: 35%;
        }
`;

const InputMail = styled.input`
    width: 72%;
    border-radius: 60px;
    border: none;

    &:focus{
        outline: none;
    }

    ${tablet} {
        }
`;

const ButtonMail = styled(Button)`
    width: 25%;
    margin-top:0;
    filter:none;
    cursor:pointer;
`;

const ListFooter = styled.ul`
    font-size:0.8rem;
    font-weight: 400;
    color: white;
    width: 40%;
    list-style: none;
    padding-left: 25px;

    & li {
        text-align: left !important;
        padding: 6px 0;
    }

    & li:hover {
        color: hsl(12,88%,59%);
        cursor: pointer;
    }
`;

const Icon = styled.img`
    width: 10%;
    padding:5px;

    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
`;

const Logo = styled.img`
    width:50%;
    margin-left: 25%;
`;

const CopyR = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 0.7rem;
    text-align: center;
    color: white;
    margin-bottom: 30px;
`;

const Message = styled.p`
    width: 80%;
    font-weight: 400;
    font-size: 0.7rem;
    color: hsl(12,88%,59%);
    text-align: left;
    padding-left: 6%;
    padding-top: 10px;
`;

const Footer = () => {

    const [email, setEmail] = useState('')
    const [correctEmail, setCorrectEmail] = useState(false)

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleGo = () => {
        console.log(email)
        if (email === '') {
            setCorrectEmail('Please complete your email address')
        } else {
            if (email.search('@') === -1) {
                setCorrectEmail('Please enter a valid email')
            } else if (email.search('.') === -1) {
                setCorrectEmail('Please enter a valid email')
            } else if (email.split('@')[1].split('.').length !== 2) {
                setCorrectEmail('Please enter a valid email')
            } else {
                setCorrectEmail('Thank you!')
            }
        }
    }

    return(
        <DivFooter>
            <DivItems>
                <InputMail type='text' placeholder='Updates in your inbox…' onChange={handleChange}></InputMail>
                <ButtonMail onClick={handleGo}>GO</ButtonMail>
                {correctEmail && <Message>{correctEmail}</Message>}
            </DivItems>
            <DivItems>
                    <ListFooter>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ListFooter>
                    <ListFooter>
                        <li>Careers</li>
                        <li>Community</li>
                        <li>Privacy Policy</li>
                        <li> </li>
                    </ListFooter>
            </DivItems>
                <DivItems>
                    <Icon src={icon1}></Icon>
                    <Icon src={icon2}></Icon>
                    <Icon src={icon3}></Icon>
                    <Icon src={icon4}></Icon>
                    <Icon src={icon5}></Icon>
                </DivItems>
                <DivItems>
                    <Logo src={logo}></Logo>
                </DivItems>
                <DivItems>
                    <CopyR>Copyright 2020. All Rights Reserved</CopyR>
                </DivItems>
        </DivFooter>
    )
}

export default Footer