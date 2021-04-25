import React from "react";
import ListDevotional from "./ListDevotional";
import {
  ContainerGral,
  HeaderDev,
  TitleDev,
  CitaHead,
  ContainerList,
  TitleList
} from "./DevotionalElements";
import Footer from "../Footer";

const Devotional = ({ isOpen, toggle }) => {
  setTimeout(function () {
    window.scrollBy({
      top: -1800,
      behaviour: "smooth",
    });
  }, 100);

  return (
    <>
      <ContainerGral>
        <HeaderDev>
          <TitleDev>
            Un momento para meditar el la Palabra de Dios.
            <CitaHead>
              Los mandamientos de Jehová son rectos, que alegran el corazón; El
              precepto de Jehová es puro, que alumbra los ojos.
              <br />
              Salmos 19:8
            </CitaHead>
          </TitleDev>
        </HeaderDev>
        <TitleList>Devocionales</TitleList>
        <ContainerList>

          <ListDevotional />
        </ContainerList>
      </ContainerGral>
      <Footer />
    </>
  );
};

export default Devotional;
