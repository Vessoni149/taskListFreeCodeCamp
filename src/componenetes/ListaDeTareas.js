import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../estilos/ListaDeTareas.css';
import Tarea from "./Tarea";
function ListaDeTareas(){
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){         //trim quita los espacios del principio o del final de una cadena de caracteres.
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];  //asi agregamos una tarea al principio del arrai tareas. Con el operador spread convertimos cada tarea del arrai tareas en objetos individuales.
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); //tareasActualizadas va a ser el arrai de tareas pero filtradas, solo estarán incluidas en el arreglo las que tengan un id distinto.
    setTareas(tareasActualizadas);
  }

const completarTarea = id => {
  const tareasActualizadas = tareas.map(tarea => {
    if( tarea.id === id ){
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
  setTareas(tareasActualizadas);
}

  return(
    <>
    <TareaFormulario onSubmit={agregarTarea} />
    <div className="tareas-lista-contenedor">
      {
        tareas.map((tarea) =>
        <Tarea 
          key={tarea.id}
          id={tarea.id}       //necesitamos 2 valores = a tarea.id xq key no se puede pasar como prop, id si. y key es necesario para que no genere errores.
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}/>
        )
      }
    </div>
    </>
  );
}

export default ListaDeTareas;