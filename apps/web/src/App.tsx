import { Toaster } from "react-hot-toast";
import { Dashboard } from "./pages";

const App: React.FC = () => {
    return (
        <>
            <Dashboard />;
            <Toaster />
        </>
    );
};

export default App;
