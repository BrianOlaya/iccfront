import styled from "styled-components";


export const ContainerGral = styled.div`

background-color:#F1F2F4;
`;


export const Header = styled.h1`
height:10vh;
padding-top:3%;
padding-left: 3%;
color:#051C59;
//text-align:center;
background-color:#F1F2F4;
font-size:45px;

@media screen and (max-width:768px){
    font-size:26px;
    text-align:center;
}
`;

export const Container = styled.div`
height:100vh;
display:flex;
align-items: center;

@media screen and (max-width:768px){
    flex-direction:column;
}
`;

export const Container2 = styled.div`
height:100vh;
display:flex;
align-items: center;
background-color:#092B8A;
@media screen and (max-width:768px){
    flex-direction:column;
}
`;
export const Title = styled.h3`
font-size:27px;
@media screen and (max-width:768px){
 
    text-align:left;

}
`;
export const ContainerImg = styled.div`
width:50%;
display:flex;
align-items: center;
@media screen and (max-width:768px){
    width:100%;
    height:50%;
}
`;

export const ContainerImg2 = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items: center;
@media screen and (max-width:768px){
    width:100%;
    height:50%;

}
`;

export const Img = styled.img`
width:70%;
margin:auto


`;
export const ContainerText = styled.div`
width:50%;
color:#051C59;
text-align:justify;
padding: 2%;
font-size: 20px;
@media screen and (max-width:768px){
    width:100%;
    height:50%;
    font-size: 17px;
}

`;
export const ContainerText2 = styled.div`
width:50%;
color:white;
text-align:justify;
padding: 2%;
font-size: 20px;
@media screen and (max-width:768px){
    width:100%;
    height:50%;
    //text-align:left;
    font-size: 17px;
}

`;
