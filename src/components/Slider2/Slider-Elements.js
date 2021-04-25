import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ContainerSlider = styled.div`
  width: 100%;
  margin: 0 auto;
   @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerImg = styled.div`
  height: 400px;
  width: 50%;
  margin: auto;
  //background:blue;
  @media screen and (max-width: 768px) {
    height:150px;
  }
`;

export const ContanierConImg = styled.div`
  width: 50%;
 //background:red;
  @media screen and (max-width: 768px) {
    height:150px;
    width: 100%;
    margin-bottom:1%;
  }
`;

export const ContainerSlide = styled.div`
  padding: 8% 2% 2%;
  display: flex;
  flex-direction: row-reverse;
  background:#f1f2f4;
  height: 530px;
  @media screen and (max-width: 768px) {
    padding-top: 20%;
    height: 500px;
    flex-direction: column;
  }
`;
export const TitleBack = styled.div`
  position: relative;
  left: 3px;
  top: 36px;
  height: 260px;
  padding: 1%;
  width: 520px;
  //background:#D10A15;
  @media screen and (max-width: 768px) {
    margin: 2px auto;
    width: 340px;
  }
`;

export const ParagraphBack = styled.p`
  color: #051C59;
  font-size: 25px;
 // width:400px;
  text-align: justify;
  height: 100px;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    line-height: 26px;
    font-size: 20px;
    height: 80px;
 
  }
`;

export const TitleBackSlide = styled.h1`
  color:#051C59;
  font-size: 48px;
  font-weight: 600;
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: #D10A15;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    border-style:none;
  }
`;

export const ButtonSlider = styled(LinkR)`
  position: relative;
  top: 20px;
  color:#f1f2f4 ;
  background-color:#051C59  ;
  border-radius: 50px;
  //font-weight: 600;
  border-style: none;
  padding: 12px 28px;
  width: 150px;
  text-decoration:none;

  @media screen and (max-width: 768px) {
    border-radius: 50px;
    left:210px;
    top: 32px;
    padding: 12px 28px;
    width: 120px;
  }

  &:hover {
    border-style: solid;
    border-color:#051C59;
    color: #051C59;
    background-color:#f1f2f4 ;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
  }
`;
