import React,{useEffect, useState} from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPrayingHands,
} from "react-icons/fa";
import { ContainerStick, One, Two, Three, Circle, Four, TitleStick } from "./stickElements";

const Stick = () => {

  const [scrollNav, setScrollNav] = useState(false);
  const [scrollNavMobile, setScrollNavMobile] = useState(false);
  

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNavMobile = () => {
    if (window.scrollY >= 500) {
      setScrollNavMobile(true);
    } else {
      setScrollNavMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavMobile);
  }, []);


  return (
    <ContainerStick scrollNav={scrollNav} scrollNavMobile={scrollNavMobile}>
      <One
        href="https://www.facebook.com/ICCRenacerParaLasNaciones"
        target="_blank"
        aria-label="Facebook"
      >
        {" "}
        <Circle>
          <FaFacebook /> 
        </Circle>
        <TitleStick>Facebook</TitleStick>
      </One>
      <Two
        href="https://www.instagram.com/renacer487/"
        target="_blank"
        aria-label="Instagram"
      >
        {" "}
        <Circle>
          <FaInstagram />
        </Circle>
        <TitleStick>Instagram</TitleStick>
      </Two>
      <Three
        href="https://www.youtube.com/channel/UCh5fF-zTvf5nkomKq5xKpjw"
        target="_blank"
        aria-label="Youtube"
      >
        {" "}
        <Circle>
          <FaYoutube />
        </Circle>
        <TitleStick>YouTube</TitleStick>
      </Three>
      <Four href="#/quiero">
        <Circle>
          <FaPrayingHands />
        </Circle>
        <TitleStick>Oración</TitleStick>
      </Four>
    </ContainerStick>
  );
};

export default Stick;
