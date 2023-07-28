import { useEffect, useState } from "react";
import "./style.css";
import { TokenData, getTokenData, isAuthenticated, removeAuthData } from "utils/requests";
import {getSaudacaoByHour} from "utils/dataHora"
import history from "utils/history";

type DadosAutenticacao = {
  autenticado:boolean;
  tokenData?:TokenData;
}

const Navbar = () => {

  const [autenticacao, setAutenticacao] = useState<DadosAutenticacao>({autenticado:false})

  useEffect(() => {

    if(isAuthenticated()){
      setAutenticacao({
       autenticado:true,
       tokenData: getTokenData()
      })
    }
    else {
      setAutenticacao({autenticado:false})
    }

  },[])

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAutenticacao({
      autenticado:false
    });
    history.replace("/")
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-md main-nav">
      <div className="container-fluid">
        <a href="/" className="navLogo">
          <h4>MOVIEFLIX</h4>
        </a>
      </div>
      <div className="logout-area-container">
        {autenticacao.autenticado ? 
          <>
            <p>{getSaudacaoByHour()} {autenticacao.tokenData?.user_name}</p>
            <p>[<a href="#logout" onClick={handleLogoutClick}>LOGOUT</a>]</p>
          </>
        :
          <p>Olá, visitante !</p>
        }
      </div>
    </nav>
  );
};

export default Navbar;
