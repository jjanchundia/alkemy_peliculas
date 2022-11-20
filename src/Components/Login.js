function Login(params) {
  return (
    <div>
      <h2>Formulario de Login</h2>
      <form>
        <label>
          <span>Correo Electrónico:</span>
          <input type="email" name="email" />
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
