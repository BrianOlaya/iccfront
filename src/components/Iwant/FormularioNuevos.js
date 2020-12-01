import React, { useContext, useState } from "react";
import nuevoContext from "../context/nuevos/nuevoContext";
import AlertaContext from "../context/alertas/alertaContext";
import {ContainerGralIwant, Invite, AlertForm, Form, Label, InputNew, InputNewSubmit} from './IwantElements'

const FormularioNuevos = () => {
  const integrantesContext = useContext(nuevoContext);
  const { agregarNuevo } = integrantesContext;

  //extraer los valores
  const alertContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta} = alertContext;

  //state para nuevo
  const [nuevo, guardarNuevo] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    nacimiento: "",
    ciudad: "",
    barrio: "",
  });

  //extraer nombre de nuevo
  const {
    nombre,
    apellido,
    telefono,
    barrio,
    correo,
    nacimiento,
    ciudad,
  } = nuevo;

  //lee los contenidos del input
  const onChangeNuevo = (e) => {
    guardarNuevo({
      ...nuevo,
      [e.target.name]: e.target.value,
    });
  };

  //cuando un nuevo envia sus datos
  const onSubmitNuevo = (e) => {
    e.preventDefault();

    //validar el integrante

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      telefono.trim() === ""
    ) {
      mostrarAlerta("Nombres, Apellidos y Telefono son obligatorios");
      return;
    }

    //agregar el state

    agregarNuevo(nuevo);

    //reiniciar el form
    guardarNuevo({
      nombre: "",
      apellido: "",
      telefono: "",
      ciudad: "",
      correo: "",
      nacimiento: "",
      barrio: "",
    });
  };

  return (
    <>
      <ContainerGralIwant>
        <Invite>
          Si hiciste esta oración te invitamos a que nos dejes tus datos. <br/>
          Queremos ayudarte y guiarte en tu crecimiento espiritual.
        </Invite>
  
        <Form onSubmit={onSubmitNuevo}>
  
          <Label>Nombre</Label>
          <InputNew
            type="text"
            placeholder="Tu Nombre"
            name="nombre"
            value={nombre}
            onChange={onChangeNuevo}
          />
          <Label>Apellido</Label>
          <InputNew
            type="text"
            placeholder="Tus apellidos"
            name="apellido"
            value={apellido}
            onChange={onChangeNuevo}
          />
          <Label># de Contácto</Label>
          <InputNew
            type="number"
            placeholder="# Fijo o celular"
            name="telefono"
            value={telefono}
            onChange={onChangeNuevo}
          />
          <Label>Ciudad</Label>
          <InputNew
            type="text"
            placeholder="Ciudad donde vives"
            name="ciudad"
            value={ciudad}
            onChange={onChangeNuevo}
          />
          <Label>Barrio</Label>
          <InputNew
            type="string"
            placeholder="Barrio  donde vives"
            name="barrio"
            value={barrio}
            onChange={onChangeNuevo}
          />
          <Label>Correo</Label>
          <InputNew
            type="email"
            placeholder="Tu correo electronico"
            name="correo"
            value={correo}
            onChange={onChangeNuevo}
          />
          <Label>Fecha de Nacimiento</Label>
          <InputNew
            type="date"
            name="nacimiento"
            value={nacimiento}
            onChange={onChangeNuevo}
          />
          {alerta ? <AlertForm>{alerta.msg}</AlertForm> : null}
          <InputNewSubmit type="submit" value="Enviar" />
 
        </Form>
      </ContainerGralIwant>
    </>
  );
};

export default FormularioNuevos;
