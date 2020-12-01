import {AGREGAR_NUEVO } from '../../types/index';

export default (state, action) => {
switch (action.type){
      case AGREGAR_NUEVO:
        return {
            ...state,
            nuevos: [...state.nuevos, action.payload]
        }       
    default:
        return state;
}
}