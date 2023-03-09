import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { keycloak } from "../utils/keycloak";

/**
 * would like to provide a more generic oidc provider where providers can be swapped out
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthContextState {
    isAuthenticated: boolean;
    logout(): void;
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const logout = () => {
        keycloak.logout();
    };

    useEffect(() => {
        (async () => {
            try {
                const authenticated = await keycloak.init({ onLoad: "login-required" });
                if (!authenticated) {
                    keycloak.login();
                }
                setIsAuthenticated(authenticated);
            } catch {
                setIsAuthenticated(false);
            }
        })();
    }, []);

    return <AuthContext.Provider value={{ isAuthenticated, logout }}>{children}</AuthContext.Provider>;
};
