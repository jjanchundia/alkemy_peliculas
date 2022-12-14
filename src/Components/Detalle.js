import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import sweetAlert from '@sweetalert/with-react';

function Detalle() {
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
    })
    .catch(error=>{
      sweetAlert(<h2>Hubo problemas, intente mas tarde</h2>);
    });
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    <>
     
     <h2>Detalle de la pelicula</h2>
    </>
  );
}

export default Detalle;
