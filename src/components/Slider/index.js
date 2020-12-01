import React from "react";
import {
  Container,
  Slide,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Caption,
  TitleSlide,
  ParagraphSlide,
  ButtonSlider,
  ButtonMobile,
} from "./SliderElements";

const Slider = () => {
  return (
    <>
      <Container>
        <Slide>
          <Slide1>
            <Caption>
              <TitleSlide>Regresamos</TitleSlide>
              <ParagraphSlide>
                Te invitamos a participar de nuestras reuniones. Entérate aqui
                de nuestros horarios y cómo asistir.
              </ParagraphSlide>
              <ButtonMobile>Ver más</ButtonMobile>
            </Caption>
            <ButtonSlider>Ver más</ButtonSlider>
          </Slide1>
          <Slide2>
            <Caption>
              <TitleSlide>Cefi</TitleSlide>
              <ParagraphSlide>
                Inscripciones abiertas para nuestra escuela de liderazgo.
                Inscríbete!
              </ParagraphSlide>
              <ButtonMobile>Ver más</ButtonMobile>
            </Caption>
            <ButtonSlider>Ver más</ButtonSlider>
          </Slide2>
          <Slide3>
            <Caption>
              <TitleSlide>Noches de Oración</TitleSlide>
              <ParagraphSlide>
                Participa todos los primeros 7 dias de cada més. Te esperamos.
              </ParagraphSlide>
              <ButtonMobile>Ver más</ButtonMobile>
            </Caption>
            <ButtonSlider>Ver más</ButtonSlider>
          </Slide3>
          <Slide4>
            <Caption>
              <TitleSlide>Reunión Juvenil</TitleSlide>
              <ParagraphSlide>
                Un espacio especialmente para tí, el útimo Sábado de cada més.
                No te lo puedes perder.
              </ParagraphSlide>
              <ButtonMobile>Ver más</ButtonMobile>
            </Caption>
            <ButtonSlider>Ver más</ButtonSlider>
          </Slide4>
        </Slide>
      </Container>
    </>
  );
};

export default Slider;
