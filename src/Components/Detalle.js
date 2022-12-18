import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import sweetAlert from "@sweetalert/with-react";

function Detalle() {
  // const history = useNavigate();
  // Redirect ahora es Navigate
  let token = sessionStorage.getItem("token");
  //Para capturar el id o valor de la url
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieId");
  // console.log(movieID);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=cf80d99a3562682f7e670df7df66f082&language=es-US`;

    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        // console.log(apiData);
        setMovie(apiData);      
        console.log(apiData.genres.map(x=>x.name)); 
      })
      .catch((error) => {
        sweetAlert(<h2>Hubo problemas, intente mas tarde</h2>);
      });
  }, [setMovie]);

  console.log(movie);  

  return (
    
    <>
      {/* Para proteger nuestra ruta */}
      {!token && <Navigate to="/" />}
      {/* Si no tengo datos */}
      { !movie && <p>Cargando...</p>}
      {/* Si tengo datos */}
      {movie && (
        <>
          <h2>Título: {movie.title}</h2>
          <div className="row">
            <div className="col-4">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" />
            </div>
            <div className="col-8">
              <h5>Fecha de Estreno: { movie.release_date }</h5>
              <h5>Reseña: </h5>
              <p>{ movie.overview }</p>
              <h5>Rating: { movie.vote_average } </h5>
              <h5>Géneros: </h5>
              <ul>
                { movie.genres?.map((x)=><li key={x.id}>{ x.name }</li>)}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detalle;
