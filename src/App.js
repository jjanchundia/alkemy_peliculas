import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";

//El Switch se lo sustituye por Routes en react-router-dom v6
function App() {
  return (
    <>
      {/* Redireccionamiento de url */}
      {/* <Route path="/" component={<Login />} /> asi se usaba antes */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}

export default App;
