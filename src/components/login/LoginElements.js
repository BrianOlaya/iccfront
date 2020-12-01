import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(234, 234, 234, 1) 0%,
    rgba(241, 242, 244, 1) 100%
  );
   @media screen and (max-width: 480px) {
    background: linear-gradient(
      180deg,
      rgba(234, 234, 234, 1) 0%,
      rgba(241, 242, 244, 1) 100%
    );
    position:absolute;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const ImgLogo = styled.img`
  width: 18%;
  margin-right: 15px;
`;

export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% auto 0 auto;
  text-decoration: none;
  color: #f1f2f4;
  font-weight: 700;
  font-size: 30px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Message = styled.div`
  height: 28%;
  display: flex;
  width: 45%;
  padding: 2%;
  margin-left: 5%;
  margin-top: 29%;
  border-radius: 10px;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const ImgEarth = styled.img`
  width: 50%;
  margin-right: 70%;
  margin-bottom: 30%;
  position: absolute;
  z-index: -1;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;
export const Comition = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: #092B8A;
  text-align: right;
`;
export const Alert = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #F1F2F4;
  background: #D10A15;
  text-align: center;
  width:100%;
  margin:auto;
  border-radius: 8px;
  padding:3%;
`;
export const Form = styled.form`
  background: #051c59;
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.9);
  }
`;

export const FormH1 = styled.h1`
  margin-top: 40px;
  color: #f1f2f4;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #f1f2f4;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #092b8a;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #f1f2f4;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0554f2;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #f1f2f4;
  font-size: 14px;
`;
