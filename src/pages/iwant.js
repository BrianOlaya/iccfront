import React, {useState} from "react";
import Iwant from '../components/Iwant';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";


const IwantPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [noTop] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Iwant/>
  
    
    </>
  );
};

export default IwantPage;
