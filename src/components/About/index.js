import React from "react";
import logo from "../../images/logoiccnav2.svg";
import earth from "../../images/earth.svg";
import {
  ContainerAbout,
  ContainerCards,
  Card,
  ImgBx,
  ImgCard,
  TitleCard,
  Content,
  ParagraphCard,
  ImgEarth
} from "./AboutElements";
import Footer from "../Footer";
const About = ({ isOpen, toggle }) => {

  setTimeout(function(){ window.scrollBy({
    top: -1800,
    behaviour: 'auto'
  });}, 50);

  return (
    <>
      <ContainerAbout>
      <ImgEarth src={earth} alt="earth" />
        <ContainerCards>
          <Card>
            <ImgBx>
             <ImgCard src ={logo} alt="mision"/>
             <TitleCard>Misión</TitleCard>                    
            </ImgBx>
            <Content>
              <ParagraphCard>Somos una comunidad viva, sin ánimo de lucro, que proclama, practica y enseña el evangelio de fe y poder, 
                    formando discípulos para Nuestro Señor Jesucristo, 
                    quien es el único mediador entre Dios y los hombres, con el fin de bendecir a Colombia y a las naciones.              
              </ParagraphCard>
            </Content>
          </Card>
          <Card>
            <ImgBx>
             <ImgCard src ={logo} alt="vision"/>
             <TitleCard>Visión</TitleCard>                    
            </ImgBx>
            <Content>
              <ParagraphCard>Desarrollar un avivamiento espiritual permanente que genere crecimiento integral en las personas para la gloria de Dios.
              </ParagraphCard>
            </Content>
          </Card>
          <Card>
            <ImgBx>
             <ImgCard src ={logo} alt="declaracion"/>
             <TitleCard>Declaración de Fé</TitleCard>                    
            </ImgBx>
            <Content>
              <ParagraphCard>Somos una entidad sin ánimo de lucro, reconocida por el Estado Colombiano que propende por la difusión del evangelio 
                    en Colombia y en otros países del mundo.El trabajo realizado desde 1975, ha sido guiado por Dios bajo principios
                     y valores que nos han permitido desarrollar nuestra labor.
              </ParagraphCard>
            </Content>
          </Card>
        </ContainerCards>       
      </ContainerAbout>
      <Footer/>
    </>
  );
};

export default About;
