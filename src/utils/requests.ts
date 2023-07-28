import QueryString from "qs";
import axios, { AxiosRequestConfig } from "axios";
import history from "./history";
import { getAuthData } from "./localStorageUtils";


export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "https://movieflix-devsuperior.herokuapp.com";
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

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials ? {
    ...config.headers,
    Authorization: "Bearer " + getAuthData().access_token,
  } : config.headers;

  return axios({...config, headers});
};


// INTERCEPTORS
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // 
  return config;
}, function (error) {
  // 
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  //
  return response;
}, function (error) {
  // Se não logado (401) ou não autorizado (403) redireciona para tela de login
  if(error.response.status === 401 || error.response.status === 403){
    console.log("Usuário não tem permissão para acessar essa página");
    history.push("/");
  }
  return Promise.reject(error);
});