import React, { useContext, useEffect } from "react";
import devocionalContext from "../context/devocionales/devocionalContext";
import AlertaContext from "../context/alertas/alertaContext";
import Moment from "react-moment";
import {ContainerDevotional, Title, Quote, Content, Author, Date,Loading} from './DevotionalElements';

const ListDevotional = () => {
  //extraer devocionales de initialState
  const devocionalesContext = useContext(devocionalContext);
  const { msg, devocionales, obtenerDevocionales } = devocionalesContext;

  const alertaContext = useContext(AlertaContext);
  const { mostrarAlerta } = alertaContext;

  //obtener devocionales cuando carga el componente
  useEffect(() => {
    //si hay un error
    if (msg) {
      mostrarAlerta(msg.msg);
    }
    obtenerDevocionales();
    //eslint-disable-next-line
  }, [msg]);

  //valida si hay devocionales
  if (devocionales.length === 0)
    return <Loading>Cargando devocionales...</Loading>;

  return (
    <>{devocionales.length===0 ?<Title>devocional.titulo</Title>
    
    :
    devocionales.map((devocional) => (
      <ContainerDevotional>
        <Title>{devocional.titulo}</Title>
        <Quote>{devocional.cita}</Quote>
        <Content>{devocional.contenido}</Content>
        <Author>{devocional.autor}</Author>    
        <Date>
          <Moment format="YYYY/MM/DD">{devocional.registro}</Moment>
        </Date>
      </ContainerDevotional>
    ))
    
    }
    
    </>
  );
};

export default ListDevotional;
