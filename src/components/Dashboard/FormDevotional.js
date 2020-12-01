import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/autenticacion/authContext";
import devocionalContext from "../context/devocionales/devocionalContext";
import AlertaContext from "../context/alertas/alertaContext";
import {ContainerFormMember, TitleFormMeber,Alert, FormMembers,LabelForm, InputMember, TextareaDevo, ButtonMember } from './DashboardElements'

const FormDevotional = () => {
  //EXTRAER LA INFORMACION DE AUTEBTICACION
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  //extraer los valores
  const alertContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertContext;

  //obtener el state del foemulario
  const devocionalesContext = useContext(devocionalContext);
  const { agregarDevocional } = devocionalesContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  //state para integrante
  const [devocional, guardarDevocional] = useState({
    titulo: "",
    cita: "",
    contenido: "",
    autor: "",
  });

  //extraer nombre de integrante
  const { titulo, cita, contenido, autor } = devocional;

  //lee los contenidos del input
  const onChangeDevocional = (e) => {
    guardarDevocional({
      ...devocional,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envía un devocional
  const onSubmitDevocional = (e) => {
    e.preventDefault();

    //validar el devocional

    if (
      titulo.trim() === "" ||
      cita.trim() === "" ||
      contenido.trim() === "" ||
      autor.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    //agregar el state

    agregarDevocional(devocional);

    //reiniciar el form
    guardarDevocional({
      titulo: "",
      cita: "",
      contenido: "",
      autor: "",
    });
  };

  return (
    <ContainerFormMember>
      <TitleFormMeber>Nuevo Devocional</TitleFormMeber> 

      <FormMembers onSubmit={onSubmitDevocional}>
        <LabelForm>Título</LabelForm>
        <InputMember
          type="text"
          placeholder="Ejemplo:La Fé"
          name="titulo"
          value={titulo}
          onChange={onChangeDevocional}
        />

        <LabelForm>Cita Bíblica</LabelForm>
        <InputMember
          type="text"
          placeholder="Ejemplo: Hebreos 11:1-40"
          name="cita"
          value={cita}
          onChange={onChangeDevocional}
        />

        <LabelForm>Contenido</LabelForm>
        <TextareaDevo
          type="text"
          placeholder="Escirbe aquí el contenido del devocional"
          name="contenido"
          value={contenido}
          onChange={onChangeDevocional}
        />

        <LabelForm>Autor</LabelForm>
        <InputMember
          type="text"
          placeholder="Escribe aquí tu nombre"
          name="autor"
          value={autor}
          onChange={onChangeDevocional}
        />
        <ButtonMember type="submit" value="Publicar Devocional" />
        {alerta ? <Alert>{alerta.msg}</Alert> : null}
      </FormMembers>
    </ContainerFormMember>
  );
};

export default FormDevotional;
