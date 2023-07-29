import { AxiosRequestConfig } from "axios";
import "./movies.css";
import ReviewBoxCard from "components/ReviewBoxCard";
import ReviewList from "components/ReviewList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hasAnyRole } from "utils/auth";
import { BASE_URL, requestBackend } from "utils/requests";
import { Review } from "utils/typesUtils";

type urlParams = {
  movieId: string;
};

const MoviesDetails = () => {
  //request backend
  const { movieId } = useParams<urlParams>();
  const [reviews, setReviews] = useState<Review[]>([]);

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
        <div className="title-order">
          <h2>Tela detalhes do filme {movieId}</h2>
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
