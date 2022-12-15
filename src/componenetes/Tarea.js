import React from 'react';
import '../estilos/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';  //asi se importa de reactIcons, y se usa el icono como un componente.

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
      onClick={()=> completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'
      onClick={()=> eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  )
}

export default Tarea;