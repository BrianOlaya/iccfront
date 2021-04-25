import React, { useEffect, useState } from "react";
import clientAxios from "../../config/axios";
import Moment from "react-moment";
import foto from '../../images/earth.svg';
import foto1 from '../../images/logoicc3.svg';
import Footer from "../Footer";
import Stick from '../Stick'
import {
  TitleDevotional,
  QuoteDevotional,
  AuthorDevotional,
  ContentDevotional,
  ContainerDevotional,
  SubContainer,
  ContarinerGralDev,
  AutorImg,
  Photo,
  DateDev,
} from "./DevotionalElements";

const Devotional = () => {
  setTimeout(function () {
    window.scrollBy({
      top: -1800,
      behaviour: "smooth",
    });
  }, 100);
  const id = window.location.hash.split("id/").pop();
  const [devotional, setDevotional] = useState({});

  useEffect(() => {
    devotionalSelected();
  }, []);

  const devotionalSelected = async () => {
    const result = await clientAxios.get(`api/devocionales/${id}`);
    const devotionalActual = await result.data.devocionalSelect;
    setDevotional(devotionalActual);
  };

  //console.log(devotional.cita)
  console.log(devotional);
  return (
    <>
    <Stick/>
      <ContarinerGralDev>
        <ContainerDevotional>
          <TitleDevotional>{devotional.titulo}</TitleDevotional>
          <QuoteDevotional>{devotional.cita}</QuoteDevotional>
          <SubContainer>
            <AuthorDevotional>Autor: <br/> {devotional.autor}</AuthorDevotional>
            <DateDev>
              Publicado:<br/>{" "}
              <Moment format="YYYY/MM/DD">{devotional.registro}</Moment>
            </DateDev>
          </SubContainer>
          <ContentDevotional>{devotional.contenido}</ContentDevotional>
        </ContainerDevotional>
        {/* <AutorImg>
          <Photo/>
         </AutorImg> */}
      </ContarinerGralDev>
      <Footer />
    </>
  );
};

export default Devotional;
