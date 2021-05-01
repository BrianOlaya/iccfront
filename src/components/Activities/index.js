import React/*, {useState} */from 'react';
import {Header, Container, Container2, Title } from './ActivitiesElements'

const Activities = ({ isOpen, toggle }) => {

 
    return ( 
        <>
        <Header>Actividades</Header>

        <Container>
            <Title>Reuniones</Title>
        </Container>

        <Container2>                    
            <Title>Redes</Title>      
        </Container2>  

        <Container>
            <Title>CEFI</Title> 
        </Container>

        <Container2>
            <Title>Generación de aviavamiento</Title>
        </Container2>

        <Container>
            <Title>Escuela infantil</Title>
       </Container>
        </>

     );
}
 
export default Activities;