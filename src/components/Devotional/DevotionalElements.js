import styled from 'styled-components';
import biblia from '../../images/puertas.jpg'

export const ContainerGral = styled.div`
    background:#F1F2F4 ;
    padding-bottom: 2%;
 `;

export const TitleGral = styled.h1`
   text-align: center;
   color:#092B8A;
   font-weight: 400; 
   background: url(${biblia});
   background-size: 100%;
   background-repeat: no-repeat;
   background-position: center;
   height:250px;
   font-size: 50px;
   padding-top: 5%;
   margin-bottom: 5%;
   
   
   @media screen and (max-width: 768px){
    height:200px;
    font-size: 30px;
    opacity:0.9;
    }
 
 `;

export const ContainerDevotional = styled.div`
    //background: rgba(9,43,138, 0.1);
    background: white;
    justify-content: center;
    height: 100%;
    padding: 2%;
    width: 70%;
    margin: 2% auto 0 auto;
    border-radius: 7px;
    box-shadow: 12px 5px 5px rgba(124,133,139, 0.2);

    @media screen and (max-width: 768px){
        width: 100%;
        box-shadow: none;
        border-radius: 0;
        padding: 4% 6%;
    }
`;

export const Title = styled.h2`
  color:#092B8A;
  margin-bottom: 1%;
  font-weight: 400;
  @media screen and (max-width: 768px){
    margin-bottom: 2%;
    }

`;

export const Quote = styled.h3`
  color:#051C59;
  margin-bottom: 2%;
  font-weight: 400;
  @media screen and (max-width: 768px){
    margin-bottom: 3%;
    }
`;

export const Content= styled.p`
color:black;
text-align:justify;
margin-bottom: 2%;
white-space:pre-line;
@media screen and (max-width: 768px){
    margin-bottom: 3%;
    }
`;

export const Author= styled.p`
color:#7C858B;
font-weight:700;
margin-bottom: 1%;
text-align: right;
@media screen and (max-width: 768px){
    margin-bottom: 2%;
    }
`;

export const Date = styled.p`
color:#7C858B;
font-weight:700;
text-align: right;
`;




