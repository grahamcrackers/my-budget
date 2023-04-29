import { Category, CategoryGroup } from "@my-budget/common";
import { PropsWithChildren, createContext, useContext } from "react";

export interface AppContextState {
    groups: CategoryGroup[];
    categories: Category[];
}

const AppContext = createContext<AppContextState | null>(null);

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === null) {
        const err = new Error(`useApp must be used inside <AppProvider />`);
        if (Error.captureStackTrace) Error.captureStackTrace(err, useApp);
        throw err;
    }

    return context;
};

export const AppProvider = ({ children }: PropsWithChildren) => {
    const values = {
        groups: [],
        categories: [],
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
