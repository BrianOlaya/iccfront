import React, { useState, useContext, useEffect } from "react";
import { withRouter} from 'react-router-dom';
import AlertaContext from "../context/alertas/alertaContext";
import AuthContext from "../context/autenticacion/authContext";
import logo2 from "../../images/logoiccnav3.svg";
import earth from "../../images/earth.svg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  ImgLogo,
  Message,
  Comition,
  ImgEarth,
  Alert
} from "./LoginElements";
const Login = (props) => {
  //extraer los valores
  const alertContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  //EN CASO DEL QUE EL USUARIO O CONTRASEÑA MO EXISTA
  useEffect(() => {
    if (autenticado) {
      console.log("AUTENTICADO");
      props.history.push("/dashboard");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg);
    }
    //eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  //state de inicio de sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    contraseña: "",
  });

  //extraer usuario
  const { nombre, contraseña } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario quiera iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    //validar que  haya campos vacios
    if (nombre.trim() === "" || contraseña.trim === "") {
      mostrarAlerta("Usuario y Contraseña son obligatiorios");
      return;
    }

    iniciarSesion({ nombre, contraseña });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <ImgEarth src={earth} alt="earth" />
          <Message>
            <Comition>
              Cumpliendo juntos la gran comisión.
              <br />
              Mateo 28 : 18-20
            </Comition>
          </Message>
          <FormContent>
            
            <Form action="#" onSubmit={onSubmit}>
            {alerta ? <Alert>{alerta.msg}</Alert> : null}
              <Icon to="/">
                {" "}
                <ImgLogo src={logo2} alt="logo" />
                Liderazgo ICC Renacer
              </Icon>
              <FormH1>Bienvenid@</FormH1>
              <FormLabel htmlFor="for">Usuario</FormLabel>
              <FormInput
                type="string"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={onChange}
              />
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput
                type="password"
                id="contraseña"
                name="contraseña"            
                value={contraseña}
                onChange={onChange}
              />
              <FormButton type="submit">Ingresar</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default withRouter (Login);
