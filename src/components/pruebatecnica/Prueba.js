import logoalteru from '../../assets/img/logoalteru.png';
import './prueba.css';

export const Prueba = () =>{
    return(
        <div className="containertest">
            <img src={logoalteru} alt="logo"/>
            <form>
            <p>
                <label>Nombre</label>
                <input type="text" name="nombre" required></input>
            </p>
            <p>
                <label>Identificación</label>
                <input type="number" name="identificacion" required></input>
            </p> 
            <p>
                <label>Correo</label>
                <input type="email" name="email" required></input>
            </p>
            </form>
            <button>Iniciar prueba</button>
        </div>
    )
}