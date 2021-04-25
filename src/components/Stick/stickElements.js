import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ContainerStick = styled.div`
 // background-color: rgba(124, 133, 139, 0.2);
  position: fixed;
  z-index: 0;
  top: 30%;
  left: 78%;
  width: 500px;
  height: 400px;
  display: ${({ scrollNav }) => (scrollNav ? "none" : "flex")};
  //display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    background-color: transparent;
    top: 32%;
    left: 80%;
    width: 200px;
    height: 250px;
    display: ${({ scrollNavMobile }) => (scrollNavMobile ? "none" : "flex")};
  }
`;
export const One = styled.a`
  width: 300px;
  height: 50px;
  margin: 4%;
  text-align: center;
  border-bottom-left-radius: 23px;
  border-top-left-radius: 23px;
  color: #f1f2f4;
  font-size: 30px;
  background-color: #092b8a;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: #f1f2f4;
    color:#092b8a;
    border:thin solid #092b8a;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 40px;
    margin: 5%;
    font-size: 25px;
    border-bottom-left-radius: 19px;
    border-top-left-radius: 19px;
  }
`;
export const Two = styled.a`
  width: 300px;
  height: 50px;
  margin: 4%;
  text-align: center;
  border-bottom-left-radius: 22px;
  border-top-left-radius: 22px;
  color: #f1f2f4;
  font-size: 30px;
  background-color: orange;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
  
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: #f1f2f4;
    color:orange;
    border:thin solid orange;
  }


  @media screen and (max-width: 768px) {
    width: 70px;
    height: 40px;
    margin: 5%;
    font-size: 25px;
    border-bottom-left-radius: 19px;
    border-top-left-radius: 19px;
  }
`;
export const Three = styled.a`
  width: 300px;
  height: 50px;
  margin: 4%;
  text-align: center;
  border-bottom-left-radius: 22px;
  border-top-left-radius: 22px;
  color: #f1f2f4;
  font-size: 30px;
  background-color: #d10a15;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: #f1f2f4;
    color:#d10a15;
    border:thin solid #d10a15;
  }


  @media screen and (max-width: 768px) {
    width: 70px;
    height: 40px;
    margin: 5%;
    font-size: 25px;
    border-bottom-left-radius: 19px;
    border-top-left-radius: 19px;
  }
`;

export const Four = styled.a`
  width: 300px;
  height: 50px;
  margin: 4%;
  text-align: center;
  border-bottom-left-radius: 22px;
  border-top-left-radius: 22px;
  color: #f1f2f4;
  font-size: 30px;
  background-color: #7c858b;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
  
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: #f1f2f4;
    color: #7c858b;
    border:thin solid  #7c858b;
  }


  @media screen and (max-width: 768px) {
    width: 70px;
    height: 40px;
    margin: 5%;
    font-size: 25px;
    border-bottom-left-radius: 19px;
    border-top-left-radius: 19px;
  }
`;

export const Circle = styled.div`
  width: 53px;
  height: 53px;
  margin-left: 1%;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 41px;
    height: 41px;
    margin: 0;
  }
`;

export const TitleStick = styled.p`
  font-size: 22px;
  margin-left: 2%;
  margin-top: 4%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
