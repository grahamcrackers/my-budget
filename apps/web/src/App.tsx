import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { SidebarLayout } from "./layouts";
import { Account } from "./pages/Account/Account";
import { Budget } from "./pages/Budget/Budget";

export const App = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SidebarLayout />}>
                    <Route path="budget" element={<Budget />} />
                    <Route path="account" element={<Account />} />
                    <Route path="*" element={<Navigate to="/budget" replace={true} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
