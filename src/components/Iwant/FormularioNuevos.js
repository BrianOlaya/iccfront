import React, { useContext, useState } from "react";

import nuevoContext from "../context/nuevos/nuevoContext";
import AlertaContext from "../context/alertas/alertaContext";
import {
  ContainerGralIwant,
  Invite,
  ModalPol,
  AlertForm,
  ContainerForm,
  Form,
  Label,
  LabelPol,
  InputNew,
  InputNewPol,
  Politicas,
  LinkPol,
  InputNewSubmit,
  TitlePol,
  ClosePol,
  ContentPol,
  TexPol,
  TitleText,
} from "./IwantElements";

const FormularioNuevos = () => {
  const integrantesContext = useContext(nuevoContext);
  const { agregarNuevo } = integrantesContext;

  //extraer los valores
  const alertContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertContext;

  //state para nuevo
  const [nuevo, guardarNuevo] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    nacimiento: "",
    ciudad: "",
    barrio: "",
    politicas: false,
  });

  const [acept, setAcept] = useState(false);

  const ChanngeAcept = () => {
    acept ? setAcept(false) : setAcept(true);
    console.log(acept);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showPol = () => {
    setModalIsOpen(true);
  };
  //extraer nombre de nuevo
  const {
    nombre,
    apellido,
    telefono,
    // barrio,
    correo,
    //nacimiento,
    ciudad,
    //politicas,
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
      mostrarAlerta("Nombre, Apellido y Teléfono son obligatorios");
      return;
    }

    if (acept === false) {
      mostrarAlerta("Debes aceptar políticas");
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
      // nacimiento: "",
      //barrio: "",
      //politicas: false,
    });

    mostrarAlerta(
      "Datos enviados satisfactoriamente, pronto te contactaremos."
    );
  };

  return (
    <>
      <ContainerGralIwant>
        <Invite>
          Si hiciste esta oración te invitamos a que nos dejes tus datos. <br />
          Queremos ayudarte y guiarte en tu crecimiento espiritual.
        </Invite>
        <ContainerForm>
          <Form onSubmit={onSubmitNuevo}>
            <Label>Nombre*</Label>
            <InputNew
              type="text"
              placeholder="Tu Nombre"
              name="nombre"
              value={nombre}
              onChange={onChangeNuevo}
            />
            <Label>Apellido*</Label>
            <InputNew
              type="text"
              placeholder="Tus apellidos"
              name="apellido"
              value={apellido}
              onChange={onChangeNuevo}
            />
            <Label># de Contácto*</Label>
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
            {/* <Label>Barrio</Label>
          <InputNew
            type="string"
            placeholder="Barrio  donde vives"
            name="barrio"
            value={barrio}
            onChange={onChangeNuevo}
          /> */}
            <Label>Correo</Label>
            <InputNew
              type="email"
              placeholder="Tu correo electronico"
              name="correo"
              value={correo}
              onChange={onChangeNuevo}
            />
            {/* <Label>Fecha de Nacimiento</Label>
          <InputNew
            type="date"
            name="nacimiento"
            value={nacimiento}
            onChange={onChangeNuevo}
          /> */}

            {alerta ? <AlertForm>{alerta.msg}</AlertForm> : null}
            <InputNewSubmit type="submit" value="Enviar" />
          </Form>

          <Politicas>
            <InputNewPol
              type="checkbox"
              name="politicas"
              value={acept}
              onChange={() => ChanngeAcept()}
            />
            <LabelPol>
              Aceptar política de tratamiento de datos.            
            </LabelPol>

          </Politicas>
          <LinkPol onClick={() => showPol()}>Ver más.</LinkPol>
        </ContainerForm>

        <ModalPol isOpen={modalIsOpen}>
          <TitlePol>POLITICA DE TRATAMIENTO DE DATOS PERSONALES</TitlePol>
          <ContentPol>
            <TexPol>
              <br />
              <TitleText>POLÍTICA DE PRIVACIDAD.</TitleText>
              <br />
              Con la finalidad de dar estricto cumplimiento a la normatividad
              vigente sobre la protección de Datos Personales, en especial por
              lo establecido en la Ley 1581 de 2012, Decreto 1377 de 2013 y en
              las demás disposiciones que las modifiquen, adicionen o
              complementen, La Iglesia Cruzada Cristiana, Itagüí-Renacer para
              las naciones, en adelante "La Organización", se permite presentar
              Política de tratamiento de datos personales datos personales la
              cual establece los términos en que ésta usa y protege la
              información que es proporcionada por sus usuarios al momento de
              utilizar su sitio web. La Organización está comprometida con la
              seguridad de los datos de sus usuarios. Cuando le pedimos llenar
              los campos de información personal con la cual usted pueda ser
              identificado, lo hacemos asegurando que sólo se empleará de
              acuerdo con los términos de este documento. Sin embargo, esta
              Política de tratamiento de datos personales puede cambiar con el
              tiempo o ser actualizada por lo que le recomendamos y enfatizamos
              revisar continuamente esta página para asegurarse que está de
              acuerdo con dichos cambios. <br />
              <br />
              <TitleText>INFORMACIÓN QUE ES RECOPILADA.</TitleText>
              <br />
              Nuestro sitio web podrá recoger información personal por ejemplo:
              Nombre, información de contacto como su dirección de correo
              electrónica e información demográfica. <br />
              <br />
              <TitleText>USO DE LA INFORMACIÓN RECOPILADA.</TitleText>
              <br />
              Nuestro sitio web emplea la información con el fin de proporcionar
              el mejor servicio posible. Es posible que sean enviados correos
              electrónicos periódicamente a través de nuestro sitio con eventos
              especiales y/o información que consideremos relevante para usted o
              que pueda brindarle algún beneficio, estos correos electrónicos
              serán enviados a la dirección que usted proporcione. La
              Organización está altamente comprometida para cumplir con el
              compromiso de mantener su información segura. <br />
              <br />
              <TitleText> ENLACES A TERCEROS</TitleText>
              <br />
              Este sitio web pudiera contener enlaces a otros sitios que
              pudieran ser de su interés. Una vez que usted de clic en estos
              enlaces y abandone nuestra página, ya no tenemos control sobre al
              sitio al que es redirigido y por lo tanto no somos responsables de
              los términos o privacidad ni de la protección de sus datos en esos
              otros sitios terceros. Dichos sitios están sujetos a sus propias
              políticas de privacidad por lo cual es recomendable que los
              consulte para confirmar que usted está de acuerdo con estas.
              <br />
              <br />
              <TitleText> CONTROL DE SU INFORMACIÓN PERSONAL.</TitleText>
              <br />
              La organización no venderá, cederá ni distribuirá la información
              personal que es recopilada sin su consentimiento, salvo que sea
              requerido por un juez con un orden judicial.
              <br />
              <br />
            </TexPol>
            <ClosePol onClick={() => setModalIsOpen(false)}>Cerrar</ClosePol>
          </ContentPol>
        </ModalPol>
      </ContainerGralIwant>
    </>
  );
};

export default FormularioNuevos;
