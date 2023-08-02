import { AxiosRequestConfig } from "axios";
import "./movies.css";
import ReviewBoxCard from "components/ReviewBoxCard";
import ReviewList from "components/ReviewList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hasAnyRole } from "utils/auth";
import { BASE_URL, requestBackend } from "utils/requests";
import { Movie, Review } from "utils/typesUtils";

type urlParams = {
  movieId: string;
};

const MoviesDetails = () => {
  //request backend
  const { movieId } = useParams<urlParams>();
  const [movie, setMovie] = useState<Movie>()
  const [reviews, setReviews] = useState<Review[]>([]);

  // Obtem os dados do filme
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config).then((result) => {
      setMovie(result.data);
    });
  }, [movieId]);


  // Obtem os comentários do filme
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((result) => {
      setReviews(result.data);
    });
  }, [movieId]);



  const handleInsertReview = (review: Review) => {
    const listaAtual = [...reviews];
    listaAtual.push(review);
    //muda o estado do componente
    setReviews(listaAtual);
  };

  return (
    <>
      <div className="moviesd-container">
       
          <div className="movie-details-content">
              <div className="movie-details-image-container">
                <img src={ movie?.imgUrl } alt={ movie?.title } className="movie-details-image" />
              </div>

              <div className="movie-details-info">
                <h1 className="movie-details-title">{ movie?.title }</h1>
                <span className="movie-details-year">{ movie?.year }</span>
                <h3 className="movie-details-subtitle">{ movie?.subTitle }</h3>
                <div className="movie-details-description-container">
                  <p className="movie-details-description-text">
                    { movie?.synopsis }
                  </p>
                </div>
              </div>
          </div>
        

        {hasAnyRole(["ROLE_MEMBER"]) ? (
          <ReviewBoxCard
            movieId={movieId}
            onInsertReview={handleInsertReview}
          />
        ) : (
          ""
        )}
        <ReviewList reviews={reviews} />
      </div>
    </>
  );
};

export default MoviesDetails;
