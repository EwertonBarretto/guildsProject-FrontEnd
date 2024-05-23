import { createContext, useEffect, useState } from "react"
//import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const [signed, setSigned]: any = useState(false);

    const handleSingin = async () => {
        //const { data: { token } }: any = true; //await api.post(login);

        //TODO quando integrar cm api e retornar o token na api;
        // localStorage.setItem('token', JSON.stringify(token));
        // api.defaults.headers.Authorization = token;
        console.log('singin');
        setSigned(true);
    }

    const handleSingout = () => {
        setSigned(false);
    }

    return (
        <AuthContext.Provider value={{ signed, handleSingin, handleSingout }}>
            {children}
        </AuthContext.Provider>
    );
}
