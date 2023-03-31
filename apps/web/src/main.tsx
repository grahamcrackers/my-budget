import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>,
    // </React.StrictMode>,
);
