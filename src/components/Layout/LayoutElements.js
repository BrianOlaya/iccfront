import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#F1F2F4" : "#051C59")};
  height: 80px;
  margin-top:  ${({noTop}) => (noTop  ? '0px' :  '-80px' )}  ;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#092B8A" : "#F1F2F4")};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: ${({ scrollNav }) => (scrollNav ? "#092B8A" : "#F1F2F4")};
  }
`;
export const ImgLogo = styled.img`
  width: 20%;
  margin: 0 0 10px 0;
  padding-right: 0;
  padding-top: 10px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? "#092B8A" : "#F1F2F4")};
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#092B8A" : "#F1F2F4")};
  display: flex;
  font-size: 20px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0554f2;
    text-decoration: none;
  }

  &.active {
    border-bottom: 4px solid #092b8a;
  }
`;

