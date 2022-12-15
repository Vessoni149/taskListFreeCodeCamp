import './App.css';
import freeCodeCampLogo from './imagenes/fcc_primary_large.svg';
import ListaDeTareas from './componenetes/ListaDeTareas';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='logo-FCC'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
