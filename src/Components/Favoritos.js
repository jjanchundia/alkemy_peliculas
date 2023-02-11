import { useEffect, useState } from "react";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let favInLocal = localStorage.getItem("favs");

    if (favInLocal !== null) {
      const favArray = JSON.parse(favInLocal);
      setFavorites(favArray);
      console.log(favArray);
    }
  }, []);

  return (
    <>
      <div className="row">
        <h2>Sección de Favoritos</h2>
        {/* estructura base */}
        {favorites.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card my-4">
                <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
                {/* <button className="favorite-btn" onClick={ props.addOrRemoveFavorite } data-movie-id={oneMovie.id}>🖤</button> */}
                <div className="card-body">
                  <h5 className="card-title">
                    {oneMovie.title}
                    {/* .substring(0, 20)}... */}
                  </h5>
                  <p className="card-text">
                    {oneMovie.overView.substring(0, 100000)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Favoritos;