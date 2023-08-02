import Routes from "Routes";
import "./App.css";
import "assets/styles/custom.scss";
import { useState } from "react";
import { AuthContext, AuthContextData } from "AuthGlobalContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    autenticado:false
  });

  return (
  <AuthContext.Provider value={{authContextData, setAuthContextData}}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <Routes />
  </AuthContext.Provider>
  );
}

export default App;
