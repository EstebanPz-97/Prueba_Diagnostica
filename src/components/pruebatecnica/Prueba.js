import logoalteru from '../../assets/img/logoalteru.png';
import './prueba.css';

export const Prueba = () =>{
    return(
        <div className="containertest">
            <div><img src={logoalteru} alt="logo"/></div>
            <form>
            <div>
                <label>Nombre</label>
                <input type="text" name="nombre" required></input>
            </div>
            <div className="id">
                <label>Identificación</label>
                <input type="number" name="identificacion" required></input>
            </div> 
            <div className="correo">
                <label>Correo</label>
                <input type="email" name="email" required></input>
            </div>
            </form>
            <button type="submit">Iniciar prueba</button>
        </div>
    )
}