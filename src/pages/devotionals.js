import React,{useState} from 'react';
import Devotionals from '../components/Devotional';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";

const DevotionalsPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     
    return (
        <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Devotionals/>
    
    </>
    )
}

export default DevotionalsPage;