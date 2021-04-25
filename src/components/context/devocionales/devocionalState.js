import React, { useReducer } from 'react';
import devocionalContext from './devocionalContext';
import devocionalReducer from './devocionalReducer';
import {FORMULARIO_DEVOCIONAL, 
        OBTENER_DEVOCIONALES,  
        AGREGAR_DEVOCIONAL,  
        VALIDAR_FORMULARIO_DEVOCIONAL,
        DEVOCIONAL_ACTUAL,
        ERROR_DEVOCIONAL,
        OCULTAR_FORMULARIO_DEVOCIONAL,
        OBTENER_DEVOCIONAL
    } from '../../types/index';  //como es index.js se puede quitar tambien y la importacion se hará correctamente, pero acá lo dejare asi
import clientAxios from '../../../config/axios';

const DevocionalState = props => {

    const initialState={
        devocionales:[],
        formularioDevocional:false,
        formularioError:false,
        devocional:null,
        msg: null

   }

   const [state, dispatch]= useReducer(devocionalReducer, initialState)

   const mostrarFormularioDevocional=()=> {
    dispatch ({
        type:FORMULARIO_DEVOCIONAL
    })
}

const ocultarFormularioDevocional=()=> {
    dispatch ({
        type:OCULTAR_FORMULARIO_DEVOCIONAL
    })
}

   // obtener los devocionales
   const obtenerDevocionales=async()=>{
    try {
        const resultado =await clientAxios.get('/api/devocionales');
        dispatch({
            type: OBTENER_DEVOCIONALES,
            payload: resultado.data.devocionales
         })
    } catch (error) {
        const alert ={
            msg:'Hubo un error',
           }
        dispatch({
            type:ERROR_DEVOCIONAL,
        //    payload:alerta
        })
    }
}

     //agregar devocional
    const agregarDevocional = async devocional=>{
        try {
            const resultado=await clientAxios.post('/api/devocionales', devocional);
            console.log(resultado);
            
          //insertar un proyecto en el state
          dispatch({
              type: AGREGAR_DEVOCIONAL,
              payload:resultado.data
          })
        } catch (error) {
          const alerta ={
              msg:'Hubo un error',
           
          }
          dispatch({
              type:ERROR_DEVOCIONAL,
              payload:alerta
          })
      }
  
      }

       //valida el formuario por errores
    const mostrarError = ()=>{
        dispatch({
            type: VALIDAR_FORMULARIO_DEVOCIONAL
        })
    }

       //selecciona el proyecto en el  que el usuario dio click
       const devocionalActual=devocionalId=>{
        dispatch({
            type:DEVOCIONAL_ACTUAL,
            payload: devocionalId
        })
    }

  

    return (  
        <devocionalContext.Provider
        value={{
            devocionales: state.devocionales,
            formularioDevocional: state.formularioDevocional,
            devocional: state.devocional,
            formularioError: state.formularioError,
            msg: state.msg,
            mostrarFormularioDevocional,
            ocultarFormularioDevocional,
            obtenerDevocionales,
            agregarDevocional,
            mostrarError,
            devocionalActual,
        }}
    >
        {props.children}
    </devocionalContext.Provider>


    );
}
 
export default DevocionalState;