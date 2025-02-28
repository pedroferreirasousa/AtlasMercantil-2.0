import styled, { keyframes } from "styled-components";
import  { useState } from "react";

// Keyframe 
const MobileOpen = keyframes`
     from {
        top: -100%;
        opacity: 0;
        height: 0;
    }
    to {
        top: 0;
        opacity: 1;
        height: 100vh;
    }
`

const Header = styled.header`
  width: 90%;
  min-width: 100vw;
  height: 10vh;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;

  @media (max-width: 790px) {
    display: flex;
  }
`;

const Nav = styled.nav`
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  border-radius: 1.5rem;
  padding: 0px 5%;
  background-color: #182215;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.767);
  z-index: 10;
`;

const Logo = styled.img`
  width: 150px;
`;

const IconMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;

  div {
    height: 5px;
    background-color: #ffffff;
    border-radius: 5px;
    transition: 200ms;
  }


  &.open div:nth-child(1) {
    transform: rotate(45deg);
    position: relative;
    top: 10px;
    background-color: #df9f15;
  }

  &.open div:nth-child(2) {
    transform: rotate(-45deg);
    position: relative;
    top: -5px;
    opacity: 0 ;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg);
    position: relative;
    top: -10px;
    background-color: #df9f15;
  }
`;

const MenuList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  background-color: #182215;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  gap: 40px;
  border-radius: 8px;
  height: 100vh;
  /* height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};  */
  /* opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; */
  transition: opacity 0.5s ease, height 0.5s ease;
  z-index: -1;
  animation: ${MobileOpen} 400ms ease-in-out;



  /* @keyframe MenuOpen {
    from {
        transform: translateY (-100%)
    }
    to {
        transform: translateY (0%)
    }
  } */
`;

const MenuItem = styled.li`
  padding: 10px 0;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 40px 100px;
    &:hover {
      color: #df9f15;
      transition: 0.5s;
    }
  }
`;

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <Header>
      <Nav>
        <div>
          <Logo src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/logo-AtlasMercantil.png" />
        </div>
        <IconMenu className={isMenuOpen ? "open" : ""} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </IconMenu>
        <MenuList isOpen={isMenuOpen}>
          <MenuItem>
            <a href="#home" onClick={closeMenu}>Home</a>
          </MenuItem>
          <MenuItem>
            <a href="#history" onClick={closeMenu}>Nossa história</a>
          </MenuItem>
          <MenuItem>
            <a href="#benefits" onClick={closeMenu}>Beneficios</a>
          </MenuItem>
          <MenuItem>
            <a href="#depoiments" onClick={closeMenu}>Depoimentos</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact" onClick={closeMenu}>Contato</a>
          </MenuItem>
        </MenuList>
      </Nav>
    </Header>
  );
};

export default MobileMenu;
