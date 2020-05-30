
import { FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
   } from '../../types';





//Lo unico que hace el reducer es cambiar el state
export default (state,action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return{
                //toma una copia del state y lo cambia a true , para que se muestre el form al apretar el boton
                ...state,
                formulario: true
            }
        
        case OBTENER_PROYECTOS:
            console.log(action.payload);
            return {
                //la linea ...state SIEMPRE va a estar en todas tus condiciones 
                ...state,
                //payload tiene el [] de proyectos
                proyectos: action.payload
            }

        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario:false
            }
            
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }

        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload),
            }

        case ELIMINAR_PROYECTO:
            return {
                 ...state,
                 proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                 proyecto: null
                }
        
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }

        default:
            return state;
    
    }
}
