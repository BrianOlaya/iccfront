import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";
import { animateScroll as scroll } from "react-scroll";
import logo2 from "../../images/logoiccnav3.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  ImgLogo,
  MapIcc,
  ContainerMapLinks,
} from "./FooterElements";

const FooterElements = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="contacto">
      <FooterWrap>
        <FooterLinksContainer>
          <ContainerMapLinks>
            <MapIcc>
              <Map center={{ lat: "6.183456", lng: "-75.596029" }} zoom={16}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
                />
                <Markers />
              </Map>
            </MapIcc>
          </ContainerMapLinks>

          <ContainerMapLinks>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinksTitle>Estamos ubicados</FooterLinksTitle>
                <FooterLink to="/signin">
                  Cra 50 # 73a -09 Itagüí-Antioquia. Colombia
                </FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinksTitle>Escríbenos</FooterLinksTitle>
                <FooterLink to="/signin">
                  renacerparalasnacionesitagui@gmail.com
                </FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinksTitle>Síguenos</FooterLinksTitle>
                <SocialIcons>
                  <SocialIconLink
                    href="https://www.facebook.com/ICCRenacerParaLasNaciones"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.instagram.com/renacer487/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.youtube.com/channel/UCh5fF-zTvf5nkomKq5xKpjw"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                </SocialIcons>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </ContainerMapLinks>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <ImgLogo src={logo2} alt="logo" />
              IccItagüí
            </SocialLogo>
            <WebsiteRights>
              Iglesia Cruzada Cristiana-Itagüí © {new Date().getFullYear()} Todos los derechos
              reservados.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default FooterElements;
