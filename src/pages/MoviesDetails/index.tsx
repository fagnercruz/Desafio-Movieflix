import "./movies.css";
import ReviewBoxCard from "components/ReviewBoxCard";
import ReviewList from "components/ReviewList";

const MoviesDetails = () => {
  return (
    <>
      <div className="movies-container">
        <div className="title-order">
          <h2>Tela detalhes do filme</h2>
          <p className="id-filme">id: 1</p>
        </div>
        <ReviewBoxCard />
        <ReviewList />
      </div>
    </>
  );
};

export default MoviesDetails;
