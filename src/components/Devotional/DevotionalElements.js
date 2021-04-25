import styled from 'styled-components';
import biblia from '../../images/puertas.jpg';
import { Link as LinkR } from "react-router-dom";

export const ContainerGral = styled.div`
    background:#F1F2F4 ;
    padding-bottom: 2%;
 `;
export const ContainerList = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 16px;
   
@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
    }
`;
export const HeaderDev = styled.div`
   position: relative;
   background: url(${biblia});
   background-size: 100%;
   background-repeat: no-repeat;
   background-position: center;
   height:450px;
   top:0px;
   margin-bottom: 5%;
   
   @media screen and (max-width: 768px){
    height:200px;
    font-size: 30px;
    opacity:0.9;
    top:-20px;
    }
 
 `;
export const TitleDev = styled.h2`
 position: relative;
 text-align: center;
 color:#092B8A;
 font-size: 25px;
 font-weight:600;
 top:110px;
 background:white;
 width:35%;
 height:250px;
 //margin:auto;
 left:800px;
 padding:2%;

@media screen and (max-width: 768px){
  font-size: 12px;
  left:55px;
  top:40px;
  width:70%;
  height:100px;
  }

`;
export const CitaHead = styled.p`
padding-top: 3%;
  font-size:20px;
  font-weight:300;
  
@media screen and (max-width: 768px){
  font-size: 10px;

  }
`;

export const CardDevotional = styled.div`
    //background: rgba(9,43,138, 0.1);
    background: white;
    justify-content: center;
    height: 100%;
    padding: 2%;
    width: 80%;
    margin: 2% auto 0 auto;
    border-radius: 7px;
    box-shadow: 12px 5px 5px rgba(124,133,139, 0.2);

    @media screen and (max-width: 768px){
        width: 100%;
        //box-shadow: none;
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
color:#051C59;
font-weight:700;
margin-bottom: 1%;
text-align: right;
@media screen and (max-width: 768px){
    margin-bottom: 2%;
    }
`;

export const Date = styled.p`
color:#051C59;
font-weight:700;
text-align: right;
`;

export const Loading = styled.h2`
  color:#092B8A;
  margin-bottom: 1%;
  text-align:center;
  //font-weight: 400;
  @media screen and (max-width: 768px){
    margin-bottom: 2%;
    }

`;

export const ButtonDev = styled.div`
   width:40%;
   background:#092B8A;
   text-align:center;
   border-radius:7px;
   padding:2% 1%;
  @media screen and (max-width: 768px){
    
    }
  &:hover{
  text-decoration:none;
  background:#051C59;
  }


`;

export const ButtonDevocional = styled(LinkR)`
text-decoration:none;
color:#F1F2F4;
font-weight:600;
width:100%;

&:hover{
  text-decoration:none;
  color:#F1F2F4;
}

`;

export const TitleList = styled.h2`
  color:#092B8A;
  margin: 5% auto;
  text-align:center;
  //font-weight: 400;
  @media screen and (max-width: 768px){
    margin-bottom: 2%;
    }

`;



export const ContainerDevotional = styled.div`
  width:70%;
  margin:5% 2%;
 

  @media screen and (max-width: 768px){
    width:76%;
    margin:5% 2%;
    }

`;
export const TitleDevotional = styled.h2`
  color:#051C59;
  text-align:left;
  font-weight:600;
  @media screen and (max-width: 768px){
    font-size:25px;
    }

`;
export const QuoteDevotional = styled.h3`
color:#051C59;
  @media screen and (max-width: 768px){
    font-size:22px;
    }

`;
export const AuthorDevotional = styled.h3`
color:#051C59;
  @media screen and (max-width: 768px){
    font-size:17px;
    }

`;
export const DateDev = styled.h2`
color:#051C59;
font-size:24px;
text-align: right;;
  @media screen and (max-width: 768px){
    font-size:17px;
    }

`;

export const ContentDevotional = styled.p`
  text-align:justify;
  @media screen and (max-width: 768px){

    }

`;

export const SubContainer = styled.div`
  display:flex;
  margin:1% 0;
  justify-content:space-between;
  @media screen and (max-width: 768px){

    }

`;

export const ContarinerGralDev = styled.div`
   display:flex;
   @media screen and (max-width: 768px){

    }

`;

export const AutorImg = styled.div`
    position: absolute;
    top:200px;
    left: 1000px;
    width:300px;
    background:red;
    height:300px;
    //z-index:-1;
    @media screen and (max-width: 768px){
      display:none;
    }

`;

export const Photo = styled.img`
  width:100%;
   @media screen and (max-width: 768px){

    }

`;


