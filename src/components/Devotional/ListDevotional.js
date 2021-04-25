import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import devocionalContext from "../context/devocionales/devocionalContext";
import AlertaContext from "../context/alertas/alertaContext";
import Moment from "react-moment";
import {
  CardDevotional,
  Title,
  Quote,
  ButtonDev,
  Author,
  Date,
  Loading,
  ButtonDevocional,
} from "./DevotionalElements";

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
    <>   
      {devocionales.map((devocional) => (
        <CardDevotional>
          <Title>{devocional.titulo}</Title>
          <Quote>{devocional.cita}</Quote>
          <Author>Autor: {devocional.autor}</Author>
          <Date>
           Publicado: <Moment format="YYYY/MM/DD">{devocional.registro}</Moment>
          </Date>
          <ButtonDev key={devocional._id}>
            <ButtonDevocional to={`/devocional/id/${devocional._id}`}>
              Ir al devocional
            </ButtonDevocional>
          </ButtonDev>
        </CardDevotional>
      ))}
    </>
  );
};

export default ListDevotional;
