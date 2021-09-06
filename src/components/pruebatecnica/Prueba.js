import logoalteru from '../../assets/img/logoalteru.png';
import './prueba.css';
import { useFormik } from 'formik';
import { db } from '../../firebase/config';
import { addDoc,collection } from '@firebase/firestore';

export const Prueba = () =>{
    const formik= useFormik({
        initialValues:
        {
            nombre:'',
            identificacion:0,
            correo:''        
    }
    });
    async function handleSubmit(e) {
        console.log(formik.values);
        e.preventDefault();
        console.log("Click Firebase");
        try {
          const docRef = await addDoc(collection(db, "usuario"), {
            name: formik.values.nombre,
            identificacion: formik.values.identificacion,
            correo: formik.values.correo
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    return(
        <div className="containertest">
            <div><img src={logoalteru} alt="logo"/></div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input type="text" name="nombre"
                onChange={formik.handleChange} 
                value={formik.values.nombre} required ></input>
            </div>
            <div className="id">
                <label>Identificación</label>
                <input type="number" name="identificacion" 
                onChange={formik.handleChange} 
                value={formik.values.identificacion}required></input>
            </div> 
            <div className="correo">
                <label>Correo</label>
                <input type="email" name="correo"
                onChange={formik.handleChange} 
                value={formik.values.correo} required></input>
            </div>
            <button type="submit">Iniciar prueba</button>
            </form>
        </div>
    )
}