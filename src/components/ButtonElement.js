import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#092B8A" : "#F1F2F4")};
  //white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#051C59" : "#F1F2F4")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
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
    background: ${({ primary }) => (primary ? "#F1F2F4" : "#D10A15")};
    border: thin solid #092b8a;
    color: #051c59;
  }
`;
