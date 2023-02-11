// Librerias
import { Routes, Route } from "react-router-dom";

//Componentes
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultado from "./components/Resultados";
import Favoritos from "./components/Favoritos";

// Estilos
import "./css/bootstrap.min.css";
import "./css/app.css";

//El Switch se lo sustituye por Routes en react-router-dom v6
function App() {
  const addOrRemoveFavorite = (e) => {
    const favMovies = localStorage.getItem("favs");
    let tempMoviesInFavs;

    if (favMovies === null)
      tempMoviesInFavs = [];
    else
      tempMoviesInFavs = JSON.parse(favMovies);

    const btn = e.target;
    // capturamos elemento padre(div) del boton
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overView = parent.querySelector("p").innerText;
    const movieData = {
      imgURL: imgURL,
      title: title,
      overView: overView,
      id: btn.dataset["movieId"],
      // asi obtenemos el id del boton
      // btn.dataset["movieId"]
    };
    // console.log(movieData);
    // console.log(btn.dataset["movieId"]);
    // filtramos los id seleccionado con los q ya estan en el array
    let movieIsInArray = tempMoviesInFavs.find((x) => {
      return x.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
    } else {
      // Aqui eliminamos la pelicula de favorito repetida
      let moviesLeft = tempMoviesInFavs.filter((x) => {
        return x.id != movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
    }
  };

  return (
    <>
      <Header />
      {/* Redireccionamiento de url */}
      {/* <Route path="/" component={<Login />} /> asi se usaba antes */}
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/listado"
            element={<Listado addOrRemoveFavorite={addOrRemoveFavorite} />}
          />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
