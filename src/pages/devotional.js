import React,{useState} from 'react';
import Devotional from '../components/Devotional/Devotional';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";
import Stick from '../components/Stick';


const DevotionalsPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     
    return (
        <>
      {/* <Stick/> */}
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Devotional/>
    
    </>
    )
}

export default DevotionalsPage;