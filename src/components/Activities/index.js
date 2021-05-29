import React /*, {useState} */ from "react";
import {
  Header,
  Container,
  Container2,
  ContainerImg,
  ContainerImg2,
  Img,
  ContainerText,
  ContainerText2,
  Title,
  ContainerGral
} from "./ActivitiesElements";
import Footer from '../Footer';
import reuniones from '../../images/fiestared.svg';
import cefi from '../../images/cefi.webp';
import niños from '../../images/kids.svg';
import red from '../../images/network.svg';
import fuego from '../../images/fire.svg';

const Activities = ({ isOpen, toggle }) => {
  return (
    <>
    <ContainerGral>
      <Header>Nuestras actividades</Header>

      <Container>
        <ContainerText>
          <Title><strong>Reuniones</strong></Title>
           <p>
            <strong> Nuestras reuniones :  <br/>
             Miércoles 7pm - 
             Domingos 8am y 10am</strong>
           </p>
       
           <p>
             Eres bienvenido, asiste con tu familia y amigos para que 
             vivamos un tiempo inolvidable en la presencia de Dios. 
           </p>
           <p>
            Pensando en el bienestar de todos, aplicamos los debidos protocolos de bioseguridad 
            por lo cual te agradecemos que asistas con tapabocas y mantengas el distanciamiento social.
           </p>
   
        </ContainerText>
        <ContainerImg>
        <Img src={reuniones}  alt = 'reuniones'/>
        </ContainerImg>
      </Container>

      <Container2>
        <ContainerText2>
          <Title><strong>Redes</strong></Title>
          <p>
            Las redes son grupos en los cuales a través de un ambiente de familia
            se realiza un pastoreo cercano a cada miembro de la iglesia que
            desee hacer parte de una de éstas.
          </p>
          <p> Éstas se clasfican en redes de mujeres, hombres, jóvenes y niños.Permitiendo
              un acompañamiento espiritual cercano y acorde a la necesidad de cada miembro de nuestra congregación.
              Haz parte!
          </p>
        </ContainerText2>

        <ContainerImg2>
        <Img src={red} alt='redes' />
        </ContainerImg2>
      </Container2>

      <Container>
        <ContainerText>
          <Title><strong>CEFI</strong></Title>

          <p>
            En el Centro de Formación Integral y liderazgo adquieres
            las herramientas necesarias para proyectar tu ministerio. Consta de 4 niveles
            en los que afirmarás conocimientos doctrinales y bíblicos que 
             te formarán para el ejercicio del miniterio.
          </p>     
          <p>Pregunta a tu lider de red como iniciar tus estudios.
             Anímate y capacítate, Dios hará cosas grandes a través de ti.            
         </p>
     
        </ContainerText>
        <ContainerImg>
        <Img src = {cefi} alt='CEFI'/>
        </ContainerImg>
      </Container>

      <Container2>
        <ContainerText2>
          <Title><strong>Generación de aviavamiento</strong></Title>
          <p>Nos gusta atrevernos, arriesgarnos, no nos vence el miedo,
            somos vencedores. Pero por sobre todo, somos un grupo de jóvenes 
            apasionados por Dios y su Palabra. Somos <strong> Generación de avivamento</strong>.            
          </p>
          <p>
            Un espacio especialmente para tí. Vén, únete para empezar a vivir
            la aventura mas grande de tu vida. Dios te esta llamando.
          </p>
     
        </ContainerText2>
        <ContainerImg2>
        <Img src={fuego}/>
        </ContainerImg2>
      </Container2>

      <Container>
        <ContainerText>
          <Title> <strong>Escuela infantil</strong> </Title>
          <p>
            Asiste a nuestras reuniones, nosotros nos encargamos de que tus hijos
            cuenten con un espacio propicio para su edad. Contamos con un equipo 
            especializado en el cuidado de tus hijos. También recibirán la  enseñanza de la Palabra de Dios con 
            actividades lúdicas  e interacción con otros niños.
          </p>
          <p>
            Trae tus niños a nuestras celebraciones, seguro van a querer volver. 
          </p>
        </ContainerText>
        <ContainerImg>
        <Img src={niños} alt='niños'/>
        </ContainerImg>
      </Container>
      </ContainerGral>
      <Footer/>
    </>
  );
};

export default Activities;
