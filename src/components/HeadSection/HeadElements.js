import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeadContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeadBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;



export const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadContentLeft = styled.div`
  z-index: 3;
  max-width: 600px;
  padding: 8px 20px;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin: 7% auto;
  }
`;
export const HeadContentRight = styled.div`
  z-index: 3;
  max-width: 600px;
  padding: 35px 25px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: auto;
    padding: 20px 20px;
  }
`;

export const HeadH1Left = styled.h1`
  color: #f1f2f4;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeadH1Right = styled.h1`
  color: #f1f2f4;
  font-size: 70px;
  text-align: center;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeadPLeft = styled.p`
  margin-top: 24px;
  color: #f1f2f4;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeadPRight = styled.p`
  margin-top: 24px;
  color: #f1f2f4;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeadBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 40%;
  }

`;

export const ButtonHead = styled(LinkR)`
  border-radius: 30px;
  background-color: #092b8a;
  white-space: nowrap;
  padding: 25% 50%;
  color: #f1f2f4;
  font-size: 30px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0554f2;
    text-decoration: none;
    color: #f1f2f4;
  }

  @media screen and (max-width: 768px) {
    padding: 25% 40%;
  }

 

`;


