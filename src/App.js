// Librerias
import { Routes, Route } from "react-router-dom";

//Componentes
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultado from "./components/Resultados";

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
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
