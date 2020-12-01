import React,{useState} from 'react';
import Devotional from '../components/Devotional';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";

const DevotionalPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     
    return (
        <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Devotional/>
    
    </>
    )
}

export default DevotionalPage;