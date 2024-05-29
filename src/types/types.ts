export interface IUser {
    email?: string,
    token?: string
}

export interface IContext extends IUser {
    signed: boolean;
    handleSingin: (email: string, password: string) => Promise<IUser>;
    handleSingout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}