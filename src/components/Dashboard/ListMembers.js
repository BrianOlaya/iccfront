import React, { useContext, useEffect } from "react";
import integranteContext from "../context/integrantes/integranteContext";
import AlertaContext from "../context/alertas/alertaContext";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";
import {ContainerTable, ContainerMembers, TitleMembers, HeadTable, RowHead, TextHead, BodyTable, RowBody, TextBody} from './DashboardElements'

const ListaIntegrantes = () => {
  //extraer proyectos de initialState
  const integrantesContext = useContext(integranteContext);
  const { msg, integrantes, obtenerIntegrantes } = integrantesContext;

  const alertaContext = useContext(AlertaContext);
  const { mostrarAlerta } = alertaContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    //si hay un error
    if (msg) {
      mostrarAlerta(msg.msg);
    }
    obtenerIntegrantes();
    //eslint-disable-next-line
  }, [msg]);

  // //valida si hay proyectos
  // if (integrantes.length === 0)
  //   return <h2>No hay integrantes ingresados aún</h2>;
  // // console.log(integrantes)
  return (
    <ContainerMembers>
      <TitleMembers>Tus integrantes</TitleMembers>

      {integrantes.lenght===0 ?  <TitleMembers>No hay integrantes ingresados aún</TitleMembers> 
      
      :
      <ContainerTable>
      <Table striped bordered hover>
        <HeadTable>
          <RowHead>
            <TextHead>Nombre</TextHead>
            <TextHead>Apellidos</TextHead>
            <TextHead>Telefono</TextHead>
            <TextHead>Barrio</TextHead>
            <TextHead>Correo</TextHead>
            <TextHead>Documento</TextHead>
            <TextHead>Fecha de nacimiento</TextHead>
            <TextHead>Estado Civil</TextHead>
          </RowHead>
        </HeadTable>
        <BodyTable>
          {integrantes.map((integrante) => (
            <RowBody>
              <TextBody>{integrante.nombre}</TextBody>
              <TextBody>{integrante.apellido}</TextBody>
              <TextBody>{integrante.telefono}</TextBody>
              <TextBody>{integrante.barrio}</TextBody>
              <TextBody>{integrante.correo}</TextBody>
              <TextBody>{integrante.cedula}</TextBody>
              <TextBody>
                <Moment format="YYYY/MM/DD">{integrante.nacimiento}</Moment>
              </TextBody>
              <TextBody>{integrante.estadocivil}</TextBody>
            </RowBody>
          ))}
        </BodyTable>
      </Table>
      </ContainerTable>
      
      }
     
    </ContainerMembers>
  );
};

export default ListaIntegrantes;
