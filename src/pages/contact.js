import React,{useState} from 'react';
import Contact from '../components/Contact';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";

const ContactPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Contact/>
    
    </>
    )
}

export default ContactPage;