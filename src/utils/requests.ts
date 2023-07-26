import QueryString from "qs";
import axios from "axios";

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  "https://movieflix-devsuperior.herokuapp.com";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "myclientsecret";

//----------- Objeto auxiliar com os dados do usuario para efetuar o login
type LoginData = {
  username: string;
  password: string;
};

//----------- função que prepara o header para ser enviado ao backend para autenticação
export const requestBackendLogin = (login: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const data = QueryString.stringify({
    ...login,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};
