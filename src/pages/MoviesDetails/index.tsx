import { AxiosRequestConfig } from "axios";
import "./movies.css";
import ReviewBoxCard from "components/ReviewBoxCard";
import ReviewList from "components/ReviewList";
import { useEffect, useState } from "react";
import { BASE_URL, requestBackend } from "utils/requests";

const MoviesDetails = () => {

  const [granted, setGranted] = useState(false);

  // Essa página tem partes que serão ou não exibidas por determinados perfis e só tem acesso pessoal autenticado
  useEffect(() => {

    const params : AxiosRequestConfig = {
      baseURL: BASE_URL,
      url:'/movies',
      withCredentials: true
    }

    requestBackend(params)
    .then((response) => {
      setGranted(true);
    })
    .catch(error => {
      setGranted(false);
    })

  },[]);

  return (
    <>
     { granted &&  
      <div className="moviesd-container">
          <div className="title-order">
            <h2>Tela detalhes do filme</h2>
            <p className="id-filme">id: 1</p>
          </div>
          <ReviewBoxCard />
          <ReviewList />
      </div>
     }

    </>
  );
};

export default MoviesDetails;
