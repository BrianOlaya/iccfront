import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/autenticacion/authContext";
import integranteContext from "../context/integrantes/integranteContext";
import AlertaContext from "../context/alertas/alertaContext";
import {ContainerFormMember, TitleFormMeber, Alert, FormMembers, LabelForm, InputMember, ButtonMember } from './DashboardElements'
const FormMember = () => {
  //EXTRAER LA INFORMACION DE AUTEBTICACION
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  //extraer los valores
  const alertContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertContext;

  //obtener el state del foemulario
  const integrantesContext = useContext(integranteContext);
  const { agregarIntegrante } = integrantesContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  //state para integrante
  const [integrante, guardarIntegrante] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    cedula: "",
    correo: "",
    nacimiento: "",
    estadocivil: "",
    barrio: "",
  });

  //extraer nombre de integrante
  const {
    nombre,
    apellido,
    telefono,
    cedula,
    correo,
    nacimiento,
    estadocivil,
    barrio,
  } = integrante;

  //lee los contenidos del input
  const onChangeIntegrante = (e) => {
    guardarIntegrante({
      ...integrante,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envía un integrante
  const onSubmitIntegrante = (e) => {
    e.preventDefault();

    //validar el integrante

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      telefono.trim() === ""
    ) {
      mostrarAlerta("Nombre, Apellidos y Teléfono son obligatorios");
      return;
    }

    //agregar el state

    agregarIntegrante(integrante);

    //reiniciar el form
    guardarIntegrante({
      nombre: "",
      apellido: "",
      telefono: "",
      cedula: "",
      correo: "",
      nacimiento: "",
      estadocivil: "",
      barrio: "",
    });
  };

  return (
      <>
    <ContainerFormMember>
      <TitleFormMeber>Nuevo Integrante</TitleFormMeber>
      <FormMembers onSubmit={onSubmitIntegrante}>
        <LabelForm>Nombre</LabelForm>
        <InputMember
          type="text"
          placeholder="Nombre Integrante"
          name="nombre"
          value={nombre}
          onChange={onChangeIntegrante}
        />

        <LabelForm>Apellidos</LabelForm>
        <InputMember
          type="text"
          placeholder="Apellido integrante"
          name="apellido"
          value={apellido}
          onChange={onChangeIntegrante}
        />

        <LabelForm>Teléfono</LabelForm>
        <InputMember
          type="number"
          placeholder="# teléfono o celular"
          name="telefono"
          value={telefono}
          onChange={onChangeIntegrante}
        />

        <LabelForm>Documento de identidad</LabelForm>
        <InputMember
          type="text"
          placeholder="# de documento"
          name="cedula"
          value={cedula}
          onChange={onChangeIntegrante}
        />

        <LabelForm>Fecha de Nacimiento</LabelForm>
        <InputMember
          type="date"
          name="nacimiento"
          value={nacimiento}
          onChange={onChangeIntegrante}
        />

        <LabelForm>Correo</LabelForm>
        <InputMember
          type="email"
          placeholder="Correo"
          name="correo"
          value={correo}
          onChange={onChangeIntegrante}
        />
        <LabelForm>Estado Civil</LabelForm>
        <InputMember
          type="string"
          placeholder="Estado Civil"
          name="estadocivil"
          value={estadocivil}
          onChange={onChangeIntegrante}
        />
        <LabelForm>Barrio</LabelForm>
        <InputMember
          type="string"
          placeholder="Barrio de residencia"
          name="barrio"
          value={barrio}
          onChange={onChangeIntegrante}
        />

        <ButtonMember type="submit" value="Ingresar"  />
        {alerta ? <Alert className="alerta">{alerta.msg}</Alert> : null}
      </FormMembers>
    </ContainerFormMember>
    </>
  );
};

export default FormMember;
