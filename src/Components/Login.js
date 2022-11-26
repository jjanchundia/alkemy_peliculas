import axios from "axios";
import swalert from '@sweetalert/with-react';

function Login(params) {
    const submitHandle = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === "" || password === "") {
            //console.log("Los campos no deben estar vacios");
            swalert(<h2>Los campos no deben estar vacíos</h2>);
            return;
        }

        if (email !== "" && !regexEmail.test(email)) {
          swalert(<h2>Escribir un correo correcto</h2>);
            return;
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
          swalert(<h2>Credenciales incorrectas</h2>);
        }

        console.log("Ok, estamos listo para enviar la información");
        axios
        .post('http://challenge-react.alkemy.org/', {email, password})
        .then(res=>{
          swalert(<h2>Perfecto, ingresaste correctemente</h2>);
            console.log(res.data);
        });
    }

  return (
    <div>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandle}>
        <label>
          <span>Correo Electrónico:</span>
          <input type="text" name="email" />
          <br />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" />
          <br />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
