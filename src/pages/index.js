import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/Navbar";
import HeadSection from "../components/HeadSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Slider from "../components/Slider2";
import Stick from '../components/Stick'
import {
  homeObjeOne,
  homeObjeThree,
  // homeObjeTwo
} from "../components/InfoSection/Data";
import { containerHeadRows } from "../components/HeadSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [noTop] = useState(false);

 const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Stick/> */}
      <SideBar isOpen={isOpen} toggle={toggle}  />
      <NavBar toggle={toggle} noTop={noTop} />
      <HeadSection {...containerHeadRows} />
      <Slider/>
      {/* <InfoSection {...homeObjeTwo} />  */}
      <InfoSection {...homeObjeOne} />
      <Services />
   
      <InfoSection {...homeObjeThree} />
      <Footer />  
    </>
  );
};

export default Home;
