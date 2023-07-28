import "./movies.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Movies = () => {

  // Essa página tem partes que serão ou não exibidas por determinados perfis e só tem acesso pessoal autenticado
  useEffect(() => {

  },[]);

  return (
    <>
        <div className="movies-container">

        <h2>Tela listagem de filmes</h2>
        <Link to="/movie/1" style={{textDecoration: 'none', color: 'unset'}}>
          <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movie/2" style={{textDecoration: 'none', color: 'unset'}}>
          <p>Acessar /movies/2</p>
        </Link>
      </div>
    </>
  );
};

export default Movies;
