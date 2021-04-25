import React from "react";
import img1 from "../../images/cefi.webp";
import img2 from "../../images/fiestablue.svg";
import img3 from "../../images/network.svg";
import Carousel from "react-bootstrap/Carousel";
import {
  ContainerSlider,
  ContainerImg,
  ContainerSlide,
  TitleBack,
  ContanierConImg,
  TitleBackSlide,
  ParagraphBack,
  ButtonSlider,

} from "./Slider-Elements";

const SliderTwo = () => {
  return (
    <ContainerSlider>
      <Carousel indicators={false}>
        <Carousel.Item interval={4000} fade={true}>
          <ContainerSlide>
            <ContanierConImg>
              <ContainerImg>
                <img className="d-block w-100 " src={img1} alt="First slide" />
              </ContainerImg>
            </ContanierConImg>
            <TitleBack>
              <TitleBackSlide>CEFI</TitleBackSlide>
              <ParagraphBack>
                Tenemos inscripciones abiertas para nuestra escuela de
                liderazgo. Algo grande espera por tí, inscríbete!
              </ParagraphBack>
              <ButtonSlider to={"/actividades"}>Ver más</ButtonSlider>
            </TitleBack>
          </ContainerSlide>
        </Carousel.Item>

        <Carousel.Item interval={4000} fade={true}>
          <ContainerSlide>
            <ContanierConImg>
              <ContainerImg>
                <img className="d-block w-100 " src={img2} alt="First slide" />
              </ContainerImg>
            </ContanierConImg>
            <TitleBack>
              <TitleBackSlide>Reuniones</TitleBackSlide>
              <ParagraphBack>
                Te invitamos a participar de nuestras reuniones. Entérate aqui
                de nuestros horarios y cómo asistir.
              </ParagraphBack>
              <ButtonSlider to={"/actividades"}>Ver más</ButtonSlider>
            </TitleBack>
          </ContainerSlide>
        </Carousel.Item>

        <Carousel.Item interval={4000} fade={true}>
          <ContainerSlide>
            <ContanierConImg>
              <ContainerImg>
                <img className="d-block w-100 " src={img3} alt="First slide" />
              </ContainerImg>
            </ContanierConImg>
            <TitleBack>
              <TitleBackSlide>Redes</TitleBackSlide>
              <ParagraphBack>
                Un espacio especialmente para tí en nuestras redes de mujeres,
                hombres, niños o jóvenes. Haz parte.
              </ParagraphBack>
              <ButtonSlider to={"/actividades"}>Ver más</ButtonSlider>
            </TitleBack>
          </ContainerSlide>
     
        </Carousel.Item>
      
      </Carousel>
     
    </ContainerSlider>
  );
};

export default SliderTwo;
