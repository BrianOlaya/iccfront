import React from "react";
import kids from "../../images/kids.svg";
import talk from "../../images/talkred.svg";
import principal from "../../images/celebratered.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nuestras Reuniones</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={principal} />
          <ServicesH2>Reuniones Pirincipales</ServicesH2>
          <ServicesP>
            Te invitamos a que compartas con nosotros un gran tiempo de
            celebración en la presencia de Dios. Infórmate aquí de nuestros
            horarios.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={talk} />
          <ServicesH2>Grupos Familiares</ServicesH2>
          <ServicesP>
            Somos una familia que comparte con sencillez de corazón y amor,
            momentos muy especiales en nuestros grupos familiares.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={kids} />
          <ServicesH2>Escuela Infantil</ServicesH2>
          <ServicesP>
            Es el lugar indicado donde contamos con maestros capacitados para
            guiar a tus hijos al conocimiento de Jesucristo.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
