import { useContext, useEffect } from "react";
import "./style.css";
import {getSaudacaoByHour} from "utils/dataHora"
import history from "utils/history";
import { AuthContext } from "AuthGlobalContext";
import { getTokenData, isAuthenticated } from "utils/auth";
import { removeAuthData } from "utils/localStorageUtils";



const Navbar = () => {

  // useState para alterar o estado do contexto global (Context API)
  const {authContextData, setAuthContextData} = useContext(AuthContext);



  useEffect(() => {

    if(isAuthenticated()){
      setAuthContextData({
       autenticado:true,
       tokenData: getTokenData()
      })
    }
    else {
      setAuthContextData({autenticado:false})
    }

  },[setAuthContextData])

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
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
        {authContextData.autenticado ? 
          <>
            <p>{getSaudacaoByHour()} {authContextData.tokenData?.user_name}</p>
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
