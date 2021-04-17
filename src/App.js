import React, {useState} from 'react'
import styled from 'styled-components'
import {BackgroundHome} from './styledComponents'
import Header from './components/Header'
import FirstSection from './components/firstSection';
import SecondSection from './components/secondSection';
import ThirdSection from './components/thirdSection';
import FourthSection from './components/fourthSection';
import Footer from './components/footer'

const Modal = styled.div`
width: 100%;
height: 100vh;
position: fixed;
z-index: 1;
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.5) 100%);
`;

const Menu = styled.div`
  margin-top: 100px;
  width: 80%;
  background-color: white;
  margin-left: 10%;
  padding: 30px 0 45px;
  border-radius: 5px;
`;

export const Options = styled.p`
  font-weight: 700;
    font-size: 0.95rem;
    padding-top: 15px;
    color: hsl(228, 39%, 23%);

    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
`;

function App() {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <BackgroundHome showMenu={showMenu}>
      {showMenu && 
      <Modal>
        <Menu>
          <Options>Pricing</Options>
          <Options>Product</Options>
          <Options>About Us</Options>
          <Options>Careers</Options>
          <Options>Community</Options>
        </Menu>
      </Modal>
      }
      <Header handleShowMenu={handleShowMenu} showMenu={showMenu}></Header>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <Footer></Footer>
    </BackgroundHome>
  );
}

export default App;
