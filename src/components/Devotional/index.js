import React from "react";
import ListDevotional from "./ListDevotional";
import { ContainerGral, TitleGral} from "./DevotionalElements";
import Footer from '../Footer'

const Devotional = ({ isOpen, toggle }) => {

  setTimeout(function(){ window.scrollBy({
    top: -1800,
    behaviour: 'smooth'
  });}, 100);

  
   return (
    <>
      <ContainerGral>
        <TitleGral></TitleGral>
        <ListDevotional />
     
      </ContainerGral>
      <Footer/>
    </>
  );
};

export default Devotional;
