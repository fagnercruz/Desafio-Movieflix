import "./login.css";
import { ReactComponent as HeroImg } from "../../assets/images/Desenho.svg";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  senha: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

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
            <div className="campos-form">
              <input
                {...register("email")}
                type="text"
                id="email"
                name="email"
                className="form-control"
              />
              <input
                {...register("senha")}
                type="password"
                id="senha"
                name="senha"
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
