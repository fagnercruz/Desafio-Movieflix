import { Link } from "react-router-dom";
import "./movies.css";

const Movies = () => {
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
