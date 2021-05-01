import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #051c59;
 
  @media screen and (max-width: 820px) {
    padding-bottom: 20px ;
 
  }
`;

export const FooterWrap = styled.div`
  /* padding: 48px 24px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding: 20px 0 ;
    display: block;
 
  }
`;

export const FooterLinksWrapper = styled.div`
  margin: 0;
  text-align: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  margin: 7%;
  color: #f1f2f4;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 18px;
    width: 100%;
  }
`;

export const FooterLinksTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 1%;

  @media screen and (max-width: 820px) {
    font-size: 17px;
  }
`;

export const FooterLink = styled.p`
  color: #f1f2f4;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 18px;

  @media screen and (max-width: 820px) {
    font-size: 14px;
  }
`;

export const MapIcc = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 820px) {
  }
`;

export const ContainerMapLinks = styled.div`
  width: 40%;
  margin: 4%;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin:0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: #f1f2f4;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: #f1f2f4;
  }
`;

export const ImgLogo = styled.img`
  width: 15%;
`;
export const WebsiteRights = styled.small`
  color: #f1f2f4;
  margin-bottom: 16px;
  text-align:center;
  @media screen and (max-width: 820px) {
    margin-bottom: 6px;
  }

`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 240px;

 @media screen and (max-width: 820px) {
   margin: 3% auto;
  }
`;

export const SocialIconLink = styled.a`
  color: #f1f2f4;
  font-size: 40px;
  margin-top: 2%;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: #D10A15;
  }
`;
