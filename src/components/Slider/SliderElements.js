import styled, { keyframes } from "styled-components";
import img1 from "../../images/worship.jpg";
import img3 from "../../images/pray.jpg";
import img2 from "../../images/graduate.jpg";
import img4 from "../../images/youngs.jpg";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: #f1f2f4;
  width: 100%;
  height: 100vh;
`;

const animate = keyframes`

    0% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(0);
    }
    25%{
        transform: translateX(-12%);
    }
    45%{
        transform: translateX(-12%);
    }
    50% {
        transform: translateX(-31%);
    }
    70% {
        transform: translateX(-31%);
    }
    75% {
        transform: translateX(-47%);
    }
    95% {
        transform: translateX(-47%);
    }
   100% {
        transform: translateX(0);
    }
  
`;

const animateMobile = keyframes`

    0% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(0);
    }
    25%{
        transform: translateX(-19%);
    }
    45%{
        transform: translateX(-19%);
    }
    50% {
        transform: translateX(-38%);
    }
    70% {
        transform: translateX(-38%);
    }
    75% {
        transform: translateX(-57%);
    }
    95% {
        transform: translateX(-57%);
    }
   100% {
        transform: translateX(0);
    }
  
`;

export const Slide = styled.div`
  top: 0;
  left: 0;
  width: 300%;
  height: 110%;
  padding: 7% 0 3% 0;
  margin: auto;
  animation-name: ${animate};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  @media screen and (max-width: 768px) {
    animation-name: ${animateMobile};
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-direction: linear;
    width: 500%;
    margin: 5% 0;
    padding-top: 10%;
    height: 130%;
  }
`;

export const Slide1 = styled.div`
  background: url(${img1});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 18%;
  display: flex;
  justify-content: left;
  height: 80%;
  float: left;
  margin: 0 20px 0 50px;
  box-shadow: 10px 5px 5px #7c858b;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 18%;
    background-size: cover;
    height: 60%;
    margin: 0 10px 0 20px;
  }
`;

export const Slide2 = styled.div`
  background: url(${img2});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: left;
  width: 18%;
  height: 80%;
  float: left;
  margin: 0 20px;
  box-shadow: 10px 5px 5px #7c858b;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 18%;
    background-size: cover;
    height: 60%;
    margin: 0 10px;
  }
`;

export const Slide3 = styled.div`
  background: url(${img3});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: left;
  width: 18%;
  height: 80%;
  float: left;
  margin: 0 20px;
  box-shadow: 10px 5px 5px #7c858b;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 18%;
    background-size: cover;
    height: 60%;
    margin: 0 10px;
  }
`;
export const Slide4 = styled.div`
  background: url(${img4});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: left;
  width: 18%;
  height: 80%;
  float: left;
  margin: 0 20px;
  box-shadow: 12px 5px 5px #7c858b;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 18%;
    background-size: cover;
    height: 60%;
    margin: 0 10px;
  }
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 50px;
  height: 40%;
  padding: 30px;
  width: 70%;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: boder-box;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
    height: 35%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    bottom: 0; 
  }
`;

export const TitleSlide = styled.h2`
  margin: 0 0 20px;
  padding: 0;
  color: #f1f2f4;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 10px;
  }
`;
export const ParagraphSlide = styled.p`
  margin: 0;
  padding: 0;
  color: #f1f2f4;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ButtonSlider = styled(LinkR)`
  background-color: #092b8a;
  color: #f1f2f4;
  font-size: 18px;
  outline: none;
  border: none;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  height: 10%;
  width: 20%;
  margin-left: 80%;
  margin-top: 49%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0554f2;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonMobile = styled(LinkR)`
  display: none;

  @media screen and (max-width: 768px) {
    background-color: #092b8a;
    color: #f1f2f4;
    font-size: 12px;
    outline:none;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    height: 25%;
    width: 30%;
    margin: 4% auto;
   


    &:hover {
      transition: all 0.2s ease-in-out;
      background: #0554f2;
    }
  }
`;
