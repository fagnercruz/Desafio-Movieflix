type LoginResponse = {
    access_token:string;
    token_type:string;
    refresh_token:string;
    expires_in:number;
    scope:string;
    userName:string;
    userId:string;
}

export const saveAuthData = (obj:LoginResponse) => {
    localStorage.setItem("authData",JSON.stringify(obj))
  }
  
  export const getAuthData = () => {
    const str = localStorage.getItem("authData") ?? "{}";
    return JSON.parse(str) as LoginResponse;
  }
  
  export const removeAuthData = () => {
    localStorage.removeItem("authData");
  }