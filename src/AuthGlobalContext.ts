import { createContext } from "react";
import { TokenData } from "utils/auth";


// tipo de dado
export type AuthContextData = {
    autenticado:boolean;
    tokenData?:TokenData;
}

// similar a um useState para o tipo acima
export type AuthContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (AuthContextData: AuthContextData) => void;
}

// criando o contexto global
export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        autenticado: false,
    },
    setAuthContextData: () => null
});