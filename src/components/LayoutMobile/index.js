import React from "react";
import logo from "../../images/logoinfoicc.svg";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  ImgLogo
} from "./LayoutMobileElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink
            to="/nosotros"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Nosotros
          </SideBarLink>
          <SideBarLink
            to="/actividades"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Actividades
          </SideBarLink>
          <SideBarLink
            to="/devocionales"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Devocionales
          </SideBarLink>
          <SideBarLink
            to="/quiero"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Si, quiero
          </SideBarLink>
          <SideBarLink
            to="/"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
          <ImgLogo src={logo} alt="logo" /> 
          </SideBarLink>
   
         </SideBarMenu>
      </SideBarWrapper>    
    </SideBarContainer>
  );
};

export default SideBar;
