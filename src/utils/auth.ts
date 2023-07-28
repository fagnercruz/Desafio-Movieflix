import jwtDecode from "jwt-decode";
import { getAuthData } from "./localStorageUtils";

export type TokenData = {
	exp: number;
	user_name: string;
	authorities: RoleTypes[];
}

// declaração de um enum em JS
type RoleTypes = "ROLE_VISITOR" | "ROLE_MEMBER";

export const getTokenData = () : TokenData | undefined => {
    try{
      return jwtDecode(getAuthData().access_token);
    } catch (error) {
      return undefined;
    }
  };

export const isAuthenticated = () : boolean => {
    const tokenData = getTokenData();
    return (tokenData && (tokenData.exp * 1000) > Date.now()) ? true : false;
  };
  
  export const hasAnyRole = (roles: RoleTypes[]) : boolean => {
    if(roles.length === 0){
      return true;
    }
    const tokenData = getTokenData();
    
    if(tokenData !== undefined){
      /* Versão espartana
      for(var i = 0; i < roles.length; i++){
        if(tokenData.authorities.includes(roles[i])){
          return true;
        }
      }*/
      return roles.some(role => tokenData.authorities.includes(role));
    } 
    return false;
  }