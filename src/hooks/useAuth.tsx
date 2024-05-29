import { useContext } from "react";
import { createContext, useEffect, useState } from "react"
import { SigninRequest, getUserLocalStorage, setUserLocalStorage } from "../services/authService";
import { IAuthProvider, IContext } from "../types/types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [signed, setSigned]: any = useState(false);
    const [user, setUser]: any = useState(false);

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
            setSigned(true);
        }
    }, []);

    const handleSingin = async (email: string, password: string) => {
        //TODO quando integrar cm api e retornar o token na api;
        try {
            const res = await SigninRequest(email, password);

            const payload = { token: res?.token, email, name: res?.name };
            console.log(payload, 'payload');

            setUser(payload);
            setSigned(payload.token ? true : false);

            return payload;
        } catch (error) {
            return error;
        }
    }

    const handleSingout = () => {
        setUser(null);
        setSigned(false);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, signed, handleSingin, handleSingout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};