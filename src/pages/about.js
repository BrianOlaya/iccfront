import React,{useState} from 'react';
import About from '../components/About';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";

const AboutPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <About/>
    
    </>
    )
}

export default AboutPage;
