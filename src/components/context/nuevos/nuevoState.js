import React, { useReducer } from 'react';
import nuevoContext from './nuevoContext';
import nuevoReducer from './nuevoReducer';
import { AGREGAR_NUEVO } from '../../types/index';  //como es index.js se puede quitar tambien y la importacion se hará correctamente, pero acá lo dejare asi
import clientAxios from '../../../config/axios';

const NuevoState = props => {

    const initialState = {
        nuevos: []
    }
    // Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(nuevoReducer, initialState)
    //agregar nuevo
    const agregarNuevo = async nuevo => {
        try {
            const resultado = await clientAxios.post('/api/nuevos', nuevo);
            console.log(resultado);
            //insertar un nuevo en el state
            dispatch({
                type: AGREGAR_NUEVO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
            }      
        }
    }
    return (
        <nuevoContext.Provider
            value={{
                nuevos: state.nuevos,
                agregarNuevo
            }}
        >
            {props.children}
        </nuevoContext.Provider>
    )
}
export default NuevoState;