import QueryString from "qs";
import axios, { AxiosRequestConfig } from "axios";

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

type LoginResponse = {
  access_token:string;
  token_type:string;
  refresh_token:string;
  expires_in:number;
  scope:string;
  userName:string;
  userId:string;
}

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

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials ? {
    ...config.headers,
    Authorization: "Bearer " + getAuthData().access_token,
  } : config.headers;

  return axios({...config, headers});
};

export const saveAuthData = (obj:LoginResponse) => {
  localStorage.setItem("authData",JSON.stringify(obj))
}

export const getAuthData = () => {
  const str = localStorage.getItem("authData") ?? "{}";
  return JSON.parse(str) as LoginResponse;
}
