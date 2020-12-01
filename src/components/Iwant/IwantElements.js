import styled from "styled-components";
import nature from '../../images/sky.jpg';
import croos from "../../images/cross2.jpg";


export const ContainerGral = styled.div`
  width: 100%;
  background: #f1f2f4;
`;
export const ContainerHead = styled.div`
  height: 500px;
  border-radius:12px;
  margin: auto;
  background: url(${nature});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 10px 5px 5px #7c858b;
`;
export const TitleGral = styled.h2`
  position: relative;
  text-align: left;
  color: #051c59;
  width:80%;
  padding:2%;
  font-weight: 400;
  font-size: 50px;
  margin-right: 25px;
  top:27%;
  border-bottom-right-radius:15px;
  border-top-right-radius:15px;
  background: rgba(124, 133, 139, 0.2);
  height:58%;
`;

export const ImgMsg = styled.div`
  background: url(${croos});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align:center;
  width: 50%;
  height:420px;
  margin-left: 4%;
  border-bottom-right-radius:40px;
  border-top-left-radius:40px;
 box-shadow: 10px 5px 5px #7c858b;
`;
export const TitleImg = styled.h3`
  position:relative;
  top:70%;
  color:#F1F2F4;
  font-weight:400;
  font-size:15px;
  padding:2%;
`;
export const Content = styled.p`
  margin: 5% auto;
  display: flex;
  font-size:20px;
  align-items:center;

`;
export const ContainerContent = styled.div`
  width: 80%;
  margin: auto;
  text-align: justify;
  padding-top: 3%;
`;
export const TitleContent = styled.h3`
  color: #051c59;
  width: 50%;
  text-align:center;
  font-weight:400;
  font-size:50px;
`;
export const Paragraph = styled.div`
  width: 50%;
`;

export const ContainerGralIwant = styled.div`
display: flex;
background: #092B8A;
margin: 1% auto 3% ; 
padding: 2%;
box-shadow: 10px 5px 5px #7c858b;
border-radius: 13px;

`;
export const Invite = styled.h3`
 font-size: 45px;
 text-align: left;
 font-weight: 700;
 margin: 0 auto;
 padding: 4%;
 width: 50%;
 color:#F1F2F4;
`;
export const AlertForm = styled.p`
  font-size: 15px;
  text-align: center;
  background: #092B8A;
  color:#F1F2F4;
  width: 100%;
  margin: auto;
  padding: 1%;
  border-radius: 7px;
  margin-bottom: 2.5%;
 `;
export const Form = styled.form`
 display: flex;
 flex-direction: column;
 width: 40%;
 margin: 1% auto 2% ;
 background:#FFFFFF;
 padding:2.5% 3%;
 border-radius:0px;
`;
export const Label = styled.label`
 width: 100%;
 font-weight: 700;
 font-size: 18px;
 color:#051C59;
`;
export const InputNew = styled.input`
 width: 100%;
 margin-bottom: 3.8%;
 font-size: 18px;
 border-color: #051C59;
 border-width:2px;
 border-radius: 5px;
 padding:3px;
 
`;
export const InputNewSubmit = styled.input`
 width: 100%;
 margin-bottom: 3.8%;
 font-size: 18px;
 border-color: #051C59;
 border-width:2px;
 border-radius: 5px;
 padding:4px;
 color:#F1F2F4;
 background:#051C59;

 :hover {
 cursor: pointer;
 background:#092B8A;
 }
 
`;

