import "./movies.css";
import ReviewBoxCard from "components/ReviewBoxCard";
import ReviewList from "components/ReviewList";
import { hasAnyRole } from "utils/requests";


const MoviesDetails = () => {
  return (
    <>
      <div className="moviesd-container">
          <div className="title-order">
            <h2>Tela detalhes do filme</h2>
            <p className="id-filme">id: 1</p>
          </div>
          {hasAnyRole(["ROLE_MEMBER"]) ? <ReviewBoxCard /> : '' }
          <ReviewList />
      </div>
    </>
  );
};

export default MoviesDetails;
