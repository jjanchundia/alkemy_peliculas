import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";

function Listado() {
  // const history = useNavigate();
  // Redirect ahora es Navigate
  let token = localStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=cf80d99a3562682f7e670df7df66f082&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios.get(endPoint)
    .then( res => {
      const apiData = res.data;
      setMoviesList(apiData.results);
    });
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    <>
      {/* Validamos de q el token no sea vacio para redireccionar */}
      {/* Para proteger nuestra ruta */}
      {!token && <Navigate to="/" />}

      <div className="row">
        {/* estructura base */}
        {
          moviesList.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card my-4">
                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title.substring(0, 20)}...</h5>
                  <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
                  <Link href="/" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
