import "./login.css";
import { ReactComponent as HeroImg } from "../../assets/images/Desenho.svg";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-banner">
          <h2>Avalie Filmes</h2>
          <p>Diga o que você achou do seu filme favorito</p>
          <div className="bannerImg-container">
            <HeroImg />
          </div>
        </div>
        <div className="login-card efeito-glass bordas-arredondadas">
          <h3>LOGIN</h3>
          <div className="campos-form">
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
            <input
              type="password"
              id="senha"
              name="senha"
              className="form-control"
            />
            <button className="btn btn-primary">FAZER LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
