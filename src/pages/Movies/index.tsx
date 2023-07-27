import { Link } from "react-router-dom";
import "./movies.css";
import { useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "utils/requests";

const Movies = () => {

  // Essa página tem partes que serão ou não exibidas por determinados perfis e só tem acesso pessoal autenticado
  useEffect(() => {

    const params : AxiosRequestConfig = {
      baseURL: BASE_URL,
      url:'/movies',
      withCredentials: true
    }

    requestBackend(params)
    .then((response) => {
      
    })
    .catch(error => {
      
    })

  },[]);

  return (
    <>
      <div className="movies-container">

        <h2>Tela listagem de filmes</h2>
        <Link to="/movies/1" style={{textDecoration: 'none', color: 'unset'}}>
          <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movies/2" style={{textDecoration: 'none', color: 'unset'}}>
          <p>Acessar /movies/2</p>
        </Link>
      </div>
    </>
  );
};

export default Movies;
