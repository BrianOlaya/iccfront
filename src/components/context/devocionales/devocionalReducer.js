import {
    FORMULARIO_DEVOCIONAL,
    OBTENER_DEVOCIONALES,
    AGREGAR_DEVOCIONAL,
    VALIDAR_FORMULARIO_DEVOCIONAL,
    DEVOCIONAL_ACTUAL,
    ERROR_DEVOCIONAL, 
    OCULTAR_FORMULARIO_DEVOCIONAL
} from '../../types/index';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_DEVOCIONAL:
            return {
                ...state,
                formularioDevocional: true
            }
        case OCULTAR_FORMULARIO_DEVOCIONAL:
            return {
                ...state,
                formularioDevocional: false
            }

        case OBTENER_DEVOCIONALES:
            return {
                ...state,
                devocionales: action.payload
            }
        case AGREGAR_DEVOCIONAL:
            return {
                ...state,
                devocionales: [...state.devocionales, action.payload],
                formularioDevocionales: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO_DEVOCIONAL:
            return {
                ...state,
                errorFormulario: true
            }
        case DEVOCIONAL_ACTUAL:
            return {
                ...state,
                devocional: state.devocionales.filter(devocional => devocional._id === action.payload)
            }

        case ERROR_DEVOCIONAL:
            return {
                ...state,
                msg: action.payload
            }

        default:
            return state;
    }
}