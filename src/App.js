// Librerias
import { Routes, Route } from "react-router-dom";

//Componentes
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Estilos
import "./css/bootstrap.min.css";
// import "./css/app.css";

//El Switch se lo sustituye por Routes en react-router-dom v6
function App() {
  return (
    <>
    <Header/>
      {/* Redireccionamiento de url */}
      {/* <Route path="/" component={<Login />} /> asi se usaba antes */}
      <div className="container mt-3">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
