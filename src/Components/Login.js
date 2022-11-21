function Login(params) {
    const submitHandle = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === "" || password === "") {
            console.log("Los campos no deben estar vacios");
            return;
        }

        if (email !== "" && !regexEmail.test(email)) {
            console.log("Escribir un correo correcto");
            return;
        }

        if (email !== "jjanchundia92@gmail.com" || password !== "12345") {
            console.log("Credenciales incorrectas");
        }

        console.log("Ok, estamos listo para enviar la información");
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
