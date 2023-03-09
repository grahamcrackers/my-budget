// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Dashboard />,
//     },
//     {
//         path: "/signin",
//         element: <Signin />,
//     },
// ]);

// const App: React.FC = () => {
//     // TODO: better authentication

//     return (
//         <>
//             <RouterProvider router={router} />
//             <Toaster />
//         </>
//     );
// };

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export const App = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            {/* <NavBar /> */}

            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/resource" element={<Resources />} /> */}
            </Routes>

            {/* <Footer /> */}
        </BrowserRouter>
    );
};
