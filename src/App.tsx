import Routes from "Routes";
import "./App.css";
import "assets/styles/custom.scss";
import { useState } from "react";
import { AuthContext, AuthContextData } from "AuthGlobalContext";

function App() {
  
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    autenticado:false
  });

  return (
  <AuthContext.Provider value={{authContextData, setAuthContextData}}>
    <Routes />
  </AuthContext.Provider>
  );
}

export default App;
