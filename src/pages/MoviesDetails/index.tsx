import "./movies.css";
import ReviewBoxCard from "components/ReviewBoxCard";
import ReviewList from "components/ReviewList";
import { useEffect } from "react";


const MoviesDetails = () => {

  // Essa página tem partes que serão ou não exibidas por determinados perfis e só tem acesso pessoal autenticado
  useEffect(() => {

  },[]);

  return (
    <>
      <div className="moviesd-container">
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
