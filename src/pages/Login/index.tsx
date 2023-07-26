import "./login.css";
import { ReactComponent as HeroImg } from "../../assets/images/Desenho.svg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackendLogin } from "utils/requests";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        console.log("SUCESSO", response);
      })
      .catch((erro) => {
        setHasError(true);
        console.log("ERRO", erro);
      });
  };

  useEffect(() => {}, []);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>LOGIN</h3>

            {hasError && (
              <div className="alert alert-danger" role="alert">
                Erro ao efetuar o login
              </div>
            )}

            <div className="campos-form">
              <input
                {...register("username")}
                type="text"
                id="email"
                name="username"
                className="form-control"
              />
              <input
                {...register("password")}
                type="password"
                id="senha"
                name="password"
                className="form-control"
              />
              <button className="btn btn-primary">FAZER LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
