import React,{useState} from 'react';
import Dashboard from '../components/Dashboard';
import SideBar from "../components/LayoutMobile";
import NavBar from "../components/Layout";

const DashboardPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [noTop] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}  noTop={noTop}/>
      <Dashboard/>
    
    </>
    )
}

export default DashboardPage;