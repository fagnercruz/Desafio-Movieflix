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
  const {register, handleSubmit,formState: { errors }} = useForm<FormData>();
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

            <div className="mb-4">
              <input
                {...register("username", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "email inválido"
                  }
                })}
                type="text"
                id="email"
                name="username"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback d-block">{errors.username?.message}</div>
            </div>
            <div className="campos-form">
              <input
                {...register("password", {
                  required: "Senha obrigatória"
                })}
                type="password"
                id="senha"
                name="password"
                className={`form-control ${errors.password ? 'is-invalid':''}`}
              />
              <div className="invalid-feedback d-block">{errors.password?.message}</div>
            </div>
            <button className="btn btn-primary">FAZER LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
