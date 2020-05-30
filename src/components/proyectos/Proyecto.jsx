import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

       //obtener el state de proyectos
       const proyectosContext = useContext(proyectoContext);
       //Consumo el context y extraigo lo que requiero, todo queda centralizado en proyectoState.jsx
       const { proyectoActual } = proyectosContext; 

       //Obtener la función del context de tarea
       const tareasContext = useContext(TareaContext);
       const { obtenerTareas } = tareasContext;


        //Función para agregar el proyecto actual
        const seleccionarProyecto = id => {
            proyectoActual(id); //Fijar un proyecto actual
            obtenerTareas(id); //Filtrar las tareas cuando se de click
        }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                //cuando demos click correra la func y le pasara el id al proyecto actual
                onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;