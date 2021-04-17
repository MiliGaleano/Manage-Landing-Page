import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assets/logo.svg'
import MenuImg from '../assets/icon-hamburger.svg'
import iconClose from '../assets/icon-close.svg'
import {Button} from './firstSection'

const breakpoint1 = 850;
const breakpoint2 = 1400;

export const tablet = `@media (min-width: ${breakpoint1}px)`
export const desktop = `@media (min-width: ${breakpoint2}px)`

const DivHeader = styled.div`
    width: 90%;
    margin-left: 5%;
    padding-top: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${tablet} {
        padding-top: 30px;
        }
`;

const Logo = styled.img`
    width: 40%;
    padding-top:2%;

    ${tablet} {
        width: 20%;
        }
`;

const Menu = styled.img`
    width: 8%;
    z-index: 10;

    &:hover{
        opacity:0.7;
        cursor: pointer;
    }

    ${tablet} {
        display: none;
        }
`;

const HeaderOpt = styled.div`
    display: none;

    ${tablet} {
        display: flex;
        flex-direction: row;
    }
`;

const MenuOptions = styled.p`
font-weight: 700;
  font-size: 0.8rem;
  padding-left: 15px;
  color: hsl(228, 39%, 23%);

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

const MenuButton = styled(Button)`
     display: none;

    ${tablet} {
        display: block;
        width: 110px;
        padding: 5px;
        margin-top: 0;
        font-size: 0.8rem;
    }
`;

const Header = ({showMenu, handleShowMenu}) => {
    return(
        <DivHeader>
            <Logo src={LogoImg}></Logo>
            <Menu src={showMenu ? iconClose : MenuImg} onClick={()=> handleShowMenu()}></Menu>
            <HeaderOpt>
                <MenuOptions>Pricing</MenuOptions>
                <MenuOptions>Product</MenuOptions>
                <MenuOptions>About Us</MenuOptions>
                <MenuOptions>Careers</MenuOptions>
                <MenuOptions>Community</MenuOptions>
            </HeaderOpt>
            <MenuButton>Get Started</MenuButton>
        </DivHeader>
    )
}

export default Header