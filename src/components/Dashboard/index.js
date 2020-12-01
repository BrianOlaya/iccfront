import React, { useContext, useEffect } from "react";
import AuthContext from "../context/autenticacion/authContext";
import integranteContext from "../context/integrantes/integranteContext";
import devocionalContext from "../context/devocionales/devocionalContext";
import FormMember from "./FormMember";
import person from '../../images/newperson.svg';
import write from '../../images/write.svg';
import ListMembers from "./ListMembers";
import FormDevotional from "./FormDevotional";
import {
  ContainerDashboard,
  HeadDashboard,
  TitleDashboard,
  User,
  Signout,
  ContainerGralForms,
  ButtonAdd,
  ContainerGralMember,
  ContainerGralDevo,
  ContainerButtons,
  BackgroundGralDevo,
  BackgroundGralMember
} from "./DashboardElements";

const Dashboard = () => {
  //EXTRAER LA INFORMACION DE AUTEBTICACION
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  //obtener el state del foemulario
  const integrantesContext = useContext(integranteContext);
  const {
    ocultarFormulario,
    mostrarFormulario,
    formularioIntegrante,
  } = integrantesContext;

  const clickFormIntegrante = () => {
    mostrarFormulario();
  };
  const ocultarFormIntegrante = () => {
    ocultarFormulario();
  };

  const devocionalesContext = useContext(devocionalContext);
  const {
    mostrarFormularioDevocional,
    ocultarFormularioDevocional,
    formularioDevocional,
  } = devocionalesContext;

  const clickFormDevocional = () => {
    mostrarFormularioDevocional();
  };
  const ocultarFormDevocional = () => {
    ocultarFormularioDevocional();
  };

  return (
    <>
      <ContainerDashboard>
        <HeadDashboard>
          <TitleDashboard>Líderes ICC Renacer para las naciones</TitleDashboard>

          {usuario ? <User>Bienvenid@ {usuario.nombre}</User> : null}

          <Signout onClick={() => cerrarSesion()}>Cerrar sesion</Signout>
        </HeadDashboard>

        <ContainerGralForms>
          <ContainerGralMember>
            <ContainerButtons>
            <ButtonAdd type="ButtonAdd" onClick={clickFormIntegrante}>
              Nuevo Integrante
            </ButtonAdd>
            {formularioIntegrante ? (
              <ButtonAdd type="button" onClick={ocultarFormIntegrante}>
                Ocultar Formulario
              </ButtonAdd>
            ) : null}
            </ContainerButtons>  
            {formularioIntegrante ? <FormMember /> : <BackgroundGralMember src={person} alt="integrantes"/>}
          </ContainerGralMember>
          <ContainerGralDevo>
          <ContainerButtons>
            <ButtonAdd type="button" onClick={clickFormDevocional}>
              Nuevo Devocional
            </ButtonAdd>
            {formularioDevocional ? (
              <ButtonAdd type="button" onClick={ocultarFormDevocional}>
                Ocultar Formulario
              </ButtonAdd>
            ) : null}
            </ContainerButtons> 
            {formularioDevocional ? <FormDevotional /> : <BackgroundGralDevo src={write} alt="devocionales"/>}
          </ContainerGralDevo>
        </ContainerGralForms>

        <ListMembers />
      </ContainerDashboard>
    </>
  );
};

export default Dashboard;
