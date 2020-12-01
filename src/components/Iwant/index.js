import React /*, {useState} */ from "react";
import FormularioNuevos from "./FormularioNuevos";
import Footer from '../Footer'

import {
  ContainerGral,
  TitleGral,
  ContainerHead,
  ImgMsg,
  Content,
  ContainerContent,
  TitleContent,
  Paragraph,
  TitleImg
} from "./IwantElements";

const Iwant = ({ isOpen, toggle }) => {
  return (
    <>
      <ContainerGral>
        <ContainerContent>
          <ContainerHead>
            <TitleGral>
              "He aquí que yo les traeré sanidad y medicina; y los curaré, y les
              revelaré abundancia de paz y de verdad." Jeremías 33:6
            </TitleGral>
          </ContainerHead>
          <Content>
            <Paragraph>
              Es un gusto para nosotros que estes aquí! Dios tiene un propósito
              especial para tu vida, el primero y más grande es que lo conozcas
              y tengas una relación cercana con Él. Cuando esto ocurre tu visión
              respecto de la vida es cambiada totalmente. Y la paz y la plenitud
              que antes eran ocasionales y dependientes de circunstancias, hoy
              son producidas por la Presencia Dios. Sin embargo, hay algo que no
              nos ha permitido esa relación cercana con Dios, esto es el pecado,
              que no es más que rebelarnos contra Dios y no tener en cuenta Su
              Palabra para nuestro diario vivir y sin darnos cuenta, esto trae
              destrucción para nosotros mismos y nuestros seres queridos. A
              causa de esta desobediencia todos mereciamos ser castigados. Pero
              Jesús, el Hijo de Dios, vino a enseñarnos el amor de Dios y ese
              castigo que nosotros mereciamos, Él lo llevo en nuestro lugar para
              que todo aquel que a El se acerque reciba el perdón y vida eterna.           
            </Paragraph>
            <ImgMsg>
            <TitleImg>"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, 
                para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." Juan 3:16</TitleImg>
            </ImgMsg>
          </Content>

          <Content>
            <Paragraph>
              Tomar la decisión de acercarse a Jesús es la decisión mas
              importane en la vida del una persona, pues al hacerlo estamos
              volviendo a nacer, dejando atrás una vida asediada por el dolor,
              el pecado, la tristeza, el fracaso y la soledad. Si estas
              dispuesto a empezar esa nueva vida te invitamos a que le digas a
              Él, con todo el corazón y con fé, las palabras escritas en la
              siguiente oración.
            </Paragraph>
            <TitleContent>La decisión más importante</TitleContent>
          </Content>

          <Content>
            <TitleContent>Oración:</TitleContent>
            <Paragraph>
              "Señor Jesús hoy me dirijo a tí con sinceridad de corazón siendo
              consiente de mi necesidad por tí y que he estado lejos de tí por
              mucho tiempo. Pero hoy me recuerdas que apesar de eso tu me has
              amado, me amas y me me amarás siempre. También me recordaste que
              tu llevaste el castigo que yo merecía pór mis pecados en la cruz y
              hoy quiero que entres en mi vida y mores en mí para siempre y seas
              mi sanador, mi consejero, mi amigo, mi Señor y Rey de mi vida. Hoy
              empiezo una nueva vida gracias a ti, a tu amor y tu perdón." Amén.
            </Paragraph>
          </Content>

          <FormularioNuevos />
        </ContainerContent>
        <Footer/>
      </ContainerGral>
    </>
  );
};

export default Iwant;
