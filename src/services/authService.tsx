import api from "./api";

export const setUserLocalStorage = (user: any) => {
    localStorage.setItem('u', JSON.stringify(user));
}

export const getUserLocalStorage = () => {
    const json = localStorage.getItem('u');

    if (!json)
        return null;

    const user = JSON.parse(json);

    return user ?? null;
}

export const SigninRequest = async (email: string, password: string) => {
    try {
        if (email === 't') {
            //const req = await api.post('login', { email, password });
            const req = { token: 'sA#@!231¨%¨$HU', name: 'teste' };
            return req;//req.data;  
        }

        return null;
    } catch (error) {
        return null;
    }
}
