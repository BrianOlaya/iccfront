import React,{useState} from 'react';
import Activities from '../components/Activities';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";

const ActivitiesPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Activities/>
    
    </>
    )
}

export default ActivitiesPage;
