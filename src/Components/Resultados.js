import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import sweetAlert from '@sweetalert/with-react';

function Resultados() {
  const [moviesResutlts, setMoviesResutlts] = useState([]);
  //Para capturar el id o valor de la url
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const location = useLocation();
  console.log(keyword)
  console.log(location)
  console.log(location.state)
  console.log(location.pathname)
  

  useEffect(() => {
    const endPoint =
      `https://api.themoviedb.org/3/search/movie?api_key=cf80d99a3562682f7e670df7df66f082&language=es-ES&query=${keyword}`;

    axios.get(endPoint).then( res => {
      const apiData = res.data.results;
      if (apiData.length === 0) {
        sweetAlert(<h2>Tu busqueda no arrojó resultados!!!</h2>);  
      }
      setMoviesResutlts(apiData);
    })
    .catch(error=>{
      sweetAlert(<h2>Hubo problemas, intente mas tarde</h2>);
    });
  }, [keyword]);

  console.log(moviesResutlts);

  return (
    <>
      <h2>Buscaste: <em>{keyword}</em></h2>
      {
        moviesResutlts.length === 0 && <h3>No hay resultados.</h3>
      }
      <div className="row">
        {/* estructura base */}
        {
          moviesResutlts.map((oneMovie, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card my-4">
                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title.substring(0, 20)}...</h5>
                  <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
                  <Link to={`/detalle?movieId=${oneMovie.id}`} className="btn btn-primary">
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

export default Resultados;