import {
    FORMULARIO_INTEGRANTE,
    OBTENER_INTEGRANTES,
    AGREGAR_INTEGRANTE,
    VALIDAR_FORMULARIO,
    INTEGRANTE_ACTUAL,
    ERROR_INTEGRANTE, 
    OCULTAR_FORMULARIO
} from '../../types/index';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_INTEGRANTE:
            return {
                ...state,
                formularioIntegrante: true
            }
        case OCULTAR_FORMULARIO:
            return {
                ...state,
                formularioIntegrante: false
            }

        case OBTENER_INTEGRANTES:
            return {
                ...state,
                integrantes: action.payload
            }
        case AGREGAR_INTEGRANTE:
            return {
                ...state,
                integrantes: [...state.integrantes, action.payload],
                formularioIntegrantes: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case INTEGRANTE_ACTUAL:
            return {
                ...state,
                integrante: state.integrantes.filter(integrante => integrante._id === action.payload)
            }

        case ERROR_INTEGRANTE:
            return {
                ...state,
                msg: action.payload
            }

        default:
            return state;
    }
}