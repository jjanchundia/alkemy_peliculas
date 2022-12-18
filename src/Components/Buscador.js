import swalert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Buscador() {
    const history = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        
        if (keyword.length === 0) {
            swalert(<h5>Tienes que ingresar una palabra!!!</h5>);
            return;
        }
        if (keyword.length <= 4) {
          swalert(<h5>Tienes que ingresar una palabra mayor a 4 caracteres!!!</h5>);
          return;
      }
            e.currentTarget.keyword.value = '';
            history(`/resultado?keyword=${keyword}`);
            // history({ 
            //   pathname: '/resultado',
            //   search: `?keyword=${keyword}`,
            //   state: {detail: keyword}
            //  });
    }

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
      {/* <div className="row">
        <div className="col-10"> */}
        <label className="form-label mb-0 mx-2">
            <input
              className="form-control"
              type="text"
              name="keyword"
              autoComplete="off"
              placeholder="Buscar..."
            />
            </label>
        {/* </div>
        <div className="col-2"> */}
          <button className="btn btn-success" type="submit">
            Buscar
          </button>
        {/* </div>
      </div> */}
    </form>
  );
}

export default Buscador;