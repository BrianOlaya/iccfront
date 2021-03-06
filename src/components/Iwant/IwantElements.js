import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Modal from "react-modal";
import nature from "../../images/sky.jpg";
import croos from "../../images/cross.jpg";

export const ContainerGral = styled.div`
  width: 100%;
  background: #f1f2f4;
`;
export const ContainerHead = styled.div`
  height: 400px;
  width: 100%;
  background: url(${nature});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: 10px 5px 5px #7c858b;
  @media screen and (max-width: 480px) {
    height: 80%;
    width: 100%;
    border-radius: 0;
  }
`;
export const TitleGral = styled.h2`
  position: relative;
  text-align: left;
  color: #051c59;
  width: 80%;
  padding: 3%;
  font-weight: 400;
  font-size: 40px;
  margin-right: 25px;
  top: 20%;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: rgba(124, 133, 139, 0.3);

  @media screen and (max-width: 480px) {
    font-size: 18px;
    font-weight: 300;
    text-align: justify;
    margin: auto, 1%;
    border-radius: 0;
    width: 100%;
    height: 200px;
    padding-top: 10%;
  }
`;

export const ImgMsg = styled.div`
  background: url(${croos});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  width: 50%;
  height: 410px;
  margin-left: 4%;
  border-radius: 30px;
  box-shadow: 10px 5px 5px #7c858b;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 230px;
    margin: 3% auto;
    border-radius: 0;
  }
`;
export const TitleImg = styled.h3`
  position: relative;
  top: 70%;
  color: #f1f2f4;
  font-weight: 400;
  font-size: 15px;
  padding: 2%;
  height: 410px;
  @media screen and (max-width: 480px) {
    height: 300px;
    font-size: 12px;
    top: 65%;
    text-align: justify;
  }
`;
export const Content = styled.p`
  margin: 5% auto;
  display: flex;
  font-size: 20px;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 90%;
  }
`;
export const ContainerContent = styled.div`
  width: 100%;
  margin: auto;
  text-align: justify;
  //padding-top: 2px;
  @media screen and (max-width: 480px) {
  }
`;
export const TitleContent = styled.h3`
  color: #051c59;
  width: 50%;
  text-align: left;
  font-weight: 400;
  font-size: 35px;
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: justify;
    width: 100%;
  }
`;

export const Paragraph = styled.div`
  width: 50%;
  font-size: 18px;
  @media screen and (max-width: 480px) {
    width: 100%;
    //font-size: 14px;
  }
`;

export const ContainerGralIwant = styled.div`
  display: flex;
  background: #092b8a;
  margin: 1% auto 0%;
  padding: 2%;
  //box-shadow: 10px 5px 5px #7c858b;
  height: 70%;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Invite = styled.h3`
  font-size: 43px;
  text-align: left;
  font-weight: 700;
  margin: 0 auto;
  padding: 4%;
  width: 50%;
  color: #f1f2f4;
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
`;
export const AlertForm = styled.p`
  font-size: 20px;
  text-align: center;
  background: #092b8a;
  color: #f1f2f4;
  width: 100%;
  margin: auto;
  padding: 1%;
  border-radius: 7px;
  margin-bottom: 2.5%;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1% auto 2%;
  background: #ffffff;
  padding: 2.5% 3%;
  border-radius: 0px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContainerForm = styled.div`
width: 50%;
padding-bottom:1%;
@media screen and (max-width: 480px) {
    width: 100%;
    padding-bottom:2%;
  }

`;
export const Label = styled.label`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: #051c59;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const LabelPol = styled.label`
  width: 100%;
  font-weight: 300;
  font-size: 20px;
  text-decoration:lightblue;
  color: #f1f2f4;
  @media screen and (max-width: 480px) {
    width: 80%;
    font-size: 15px;
  }
`;
export const InputNew = styled.input`
  width: 100%;
  margin-bottom: 3%;
  font-size: 18px;
  border-color: #051c59;
  border-width: 2px;
  border-radius: 5px;
  padding: 3px;
  @media screen and (max-width: 480px) {
    font-size: 13px;

  }
`;
export const InputNewPol = styled.input`
  width: 10%;
  font-size: 18px;
  border-color: #051c59;
  border-width: 2px;
  border-radius: 5px;
  padding: 3px;
`;

export const Politicas = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13%;
  padding-bottom: 1%;
  @media screen and (max-width: 480px) {
    //  flex-direction:column;
    margin:auto;
  }
`;

export const LinkPol = styled.button`
 
  font-size: 15px;
  border: none;
  width:50%;
  padding:1%;
  margin-left:25%; 
  border-radius:7px;
  background:white;
  color: #051c59;
  //text-decoration: none;
  :hover{
    cursor: pointer; 
    color:#092b8a;
    
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
    padding:0.5%;
  }
`;

export const ModalPol = styled(Modal)`
position:relative;
  top: 18%;
  height: 400px;
  width: 60%;
  margin: auto;
 background: #051c59;

 @media screen and (max-width: 480px) {
  width: 90%;
  //height:350px;
  top: 22%;
  }
`;
export const ClosePol = styled.button`
  cursor: pointer;
  font-size: 20px;
  font-weight:700;
  color:#051c59;
  
`;
export const ContentPol = styled.div`
 display:flex;
 flex-direction: column;
 max-height:400px;
 @media screen and (max-width: 480px) {
max-height:350px;
  }
`;
export const TexPol = styled.div`
  font-size: 15px;
  color: white;
  overflow:auto;
  text-align:justify;
  padding: 1%;
  @media screen and (max-width: 480px) {
    padding: 2%;
  }
`;
export const TitleText = styled.h3`
  color: white; 
  text-align:center;
  font-weight:700;
  //background:gray;
`;

export const TitlePol = styled.h1`
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight:700;

  //text-decoration: none;
`;

export const InputNewSubmit = styled.input`
  width: 100%;
  margin-bottom: 3.8%;
  font-size: 18px;
  border-color: #051c59;
  border-width: 2px;
  border-radius: 5px;
  padding: 4px;
  color: #f1f2f4;
  background: #051c59;

  :hover {
    cursor: pointer;
    background: #092b8a;
  }
`;

/*
@media screen and (max-width: 768px) {
  margin: 7% auto;
}*/
