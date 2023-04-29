import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";
import { AppProvider } from "./contexts/AppContext";

if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <AuthProvider>
        <AppProvider>
            <App />
        </AppProvider>
    </AuthProvider>,
    // </React.StrictMode>,
);
