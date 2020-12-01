import React, { useReducer } from 'react';
import integranteContext from './integranteContext';
import integranteReducer from './integranteReducer';
import {FORMULARIO_INTEGRANTE, 
        OBTENER_INTEGRANTES,  
        AGREGAR_INTEGRANTE,  
        VALIDAR_FORMULARIO,
        INTEGRANTE_ACTUAL,
        ERROR_INTEGRANTE,
        OCULTAR_FORMULARIO
    } from '../../types/index';  //como es index.js se puede quitar tambien y la importacion se hará correctamente, pero acá lo dejare asi
import clientAxios from '../../../config/axios';

const IntegranteState = props=> {

    
    const initialState={
         integrantes:[],
         formularioIntegrante:false,
         formularioError:false,
         integrante:null,
         msg: null

    }
    // Dispatch para ejecutar acciones

    const [state, dispatch]= useReducer(integranteReducer, initialState)

    //serie de funciones para el CRUD
    const mostrarFormulario=()=> {
        dispatch ({
            type:FORMULARIO_INTEGRANTE
        })
    }

    const ocultarFormulario=()=> {
        dispatch ({
            type:OCULTAR_FORMULARIO
        })
    }

    // obtener los integrantes
    const obtenerIntegrantes=async()=>{
        try {
            const resultado =await clientAxios.get('/api/integrantes');
            dispatch({
                type: OBTENER_INTEGRANTES,
                payload: resultado.data.integrantes
             })
        } catch (error) {
            const alert ={
                msg:'Hubo un error',
               }
            dispatch({
                type:ERROR_INTEGRANTE,
            //    payload:alerta
            })
        }
    }

    //agregar proyecto
    const agregarIntegrante = async integrante=>{
      try {
          const resultado=await clientAxios.post('/api/integrantes', integrante);
          console.log(resultado);
          
        //insertar un proyecto en el state
        dispatch({
            type: AGREGAR_INTEGRANTE,
            payload:resultado.data
        })
      } catch (error) {
        const alerta ={
            msg:'Hubo un error',
         
        }
        dispatch({
            type:ERROR_INTEGRANTE,
            payload:alerta
        })
    }

    }

    //valida el formuario por errores
    const mostrarError = ()=>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    //selecciona el proyecto en el  que el usuario dio click
    const integranteActual=integranteId=>{
        dispatch({
            type:INTEGRANTE_ACTUAL,
            payload: integranteId
        })
    }

    return (
        <integranteContext.Provider
            value={{
                integrantes:state.integrantes,
                formularioIntegrante: state.formularioIntegrante,
                integrante:state.integrante,
                formularioError: state.formularioError,
                msg:state.msg,
                mostrarFormulario,
                ocultarFormulario,
                obtenerIntegrantes,
                agregarIntegrante,
                mostrarError,
                integranteActual,
            }}
        >
            {props.children}
        </integranteContext.Provider>
    )
}
export default IntegranteState;