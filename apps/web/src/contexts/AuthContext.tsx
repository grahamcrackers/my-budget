import { PropsWithChildren, createContext, useContext, useState } from "react";
import { client } from "../utils/client";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthContextState {
    user: any;
    signin(username: string, password: string): void;
    signout(): void;
}

const AuthContext = createContext<AuthContextState | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === null) {
        const err = new Error(`Missing <AuthProvider />`);
        if (Error.captureStackTrace) Error.captureStackTrace(err, useAuth);
        throw err;
    }

    return context;
};

export const AuthProvider = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
    const [user, setUser] = useState<any>();

    const signin = async (username: string, password: string) => {
        const result = await client("auth/login", { body: { username, password } });
        console.log(result);
        setUser(result);
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const signout = () => {};

    return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
};
