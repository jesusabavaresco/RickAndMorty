import { useState } from "react";
import style from './Form.module.css';
import validation from "../validation/validation";

const Forms = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validation({...userData,[event.target.name]: event.target.value }))
    setUserData({ ...userData,[event.target.name]: event.target.value,})
};

const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData)
};  

  return (
    <div className={style.container}>
      <form>
        <label htmlFor="email">Email: </label>
        <input
          placeholder='Ejemplo@correo.com'
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2}</p>) 
        : (<p>{errors.e3}</p>)
        }
        <label htmlFor="password">Password: </label>
        <input 
          className={style.input}
          placeholder="Contraseña..."
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {
            errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
        }
        <br />
        <button className={style.btn} onClick={handleSubmit} type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Forms;
