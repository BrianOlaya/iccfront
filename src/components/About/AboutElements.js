import styled from "styled-components";



export const ContainerAbout = styled.div`
  background:#F1F2F4 ;
  display:flex;
  justify-content:center;
  min-height:100vh;
  overflow:hidden;
  padding-top: 8%;
 
`;


export const ContainerCards = styled.div`
  position: relative;
  width:1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  transform: skewY(-2deg);
  z-index:2;

  @media screen and (max-width: 768px) {
   flex-direction: column;
   justify-content: center;
   margin-left: 15%;
   margin-top: 10%;
   margin-bottom: 10%;  
   transform: skewY(-1deg);
}

`;


export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 401px;
  background:#fff;
  transition: 0.5s;

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    background: #00c0f6;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 15px;   
    height: 50%;
    background:  #00c0f6;
    transform-origin: left;
    transform: skewY(45deg);
    transition: 0.5s;
    border-bottom: 200px solid #d9d9d9;
  }

  &:hover{
    transform: translateY(-40px);
  }


  &:nth-child(1){
    z-index:3
  }
  &:nth-child(2){
    z-index:2
  }
  &:nth-child(3){
    z-index:1
  }

  @media screen and (max-width: 768px) {
   margin-top: 8% ;  
   margin-bottom: 8% ; 

     &:hover{
    transform: translateY(-15px);
  }
  }
`;

export const ImgBx = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background: #00c7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ImgCard = styled.img`
  max-width:100px;
`;
export const TitleCard = styled.h3`
  position: relative;
  color:#fff;
  margin-top: 10px;
`;
export const Content = styled.div`
  position: relative;
  width:100%;
  height: 200px;
  padding:10px;
  color: black;
  background: #fff;
  text-align: center;

   
  &:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 200px;
    background:linear-gradient(transparent, transparent, rgba(124,133,139, 0.4));
    transform-origin:bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;    
  };
   `;
export const ParagraphCard = styled.p`
  font-size: 15px;
`;

export const ImgEarth = styled.img`
  width: 40%;
  left: 30px;
  top: 20px;
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;



