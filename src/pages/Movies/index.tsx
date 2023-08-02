import "./movies.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Genre, MovieResponse } from "utils/typesUtils";
import { BASE_URL, requestBackend } from "utils/requests";
import MovieCard from "./MovieCard";
import { AxiosRequestConfig } from "axios";
import Filter from "components/Filter";
import Pagination from "./Pagination";


const Movies = () => {
  // Essa página tem partes que serão ou não exibidas por determinados perfis e só tem acesso pessoal autenticado

  const [genre, setGenre] = useState<Genre>()
  const [moviesResponse, setMoviesResponse] = useState<MovieResponse>();
  const [activePage, setActivePage] = useState(0)


   useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: `/movies`,
      withCredentials: true,
      params: {
        size:8,
        page: activePage,
        genreId: genre?.id
      }
    }

    requestBackend(config)
      .then(response => {
        console.log(response.data);
        setMoviesResponse(response.data)
      })
  },[activePage,genre]);

  const handleChangeGenre = (genre: Genre) => {
    setActivePage(0)
    setGenre(genre)
  }

  return (
    <>
      <div className="movies-container">
          <Filter genre={ genre } handleChangeGenre={ handleChangeGenre } />
       
          {moviesResponse?.content.map(movie => (
            <Link to={ `/movies/${movie.id}` } key={ movie.id }>
              <MovieCard movie={ movie } />
            </Link>
          ))}
       
        {moviesResponse && (
          <Pagination
            totalPages={ moviesResponse.totalPages }
            activePage={ activePage }
            onChange={ page => setActivePage(page) }
          />
        )}
        
      </div>
    </>
  );
};

export default Movies;
