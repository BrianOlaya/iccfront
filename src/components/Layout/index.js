import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logoiccnav2.svg";
import logo2 from "../../images/logoiccnav3.svg";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ImgLogo,
} from "./LayoutElements";

const Navbar = ({ toggle, noTop }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav} noTop={noTop}>
        <NavbarContainer>
          <NavLogo to="/" scrollNav={scrollNav} onClick={toggleHome}>
            <ImgLogo src={scrollNav ? logo : logo2} alt="logo" /> IccRenacer
          </NavLogo>
          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/nosotros"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Nosotros
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="/actividades"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Actividades
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="/devocionales"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Devocionales
              </NavLinks>
            </NavItem>       
            <NavItem>
              <NavLinks
                to="/quiero"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Si,quiero
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="/contacto"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Contáctanos
              </NavLinks>
            </NavItem> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
