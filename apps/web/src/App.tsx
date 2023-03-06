import { Toaster } from "react-hot-toast";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Signin } from "./pages";

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
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Resources } from "./Resources";

const NavBar = () => {
    return (
        <nav>
            <div className="flex justify-around items-center py-5 bg-[#234] text-white">
                <h1 className="font-semibold font-2xl">KeyCloak App</h1>
                <ul className="flex">
                    <li className="mx-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/resource">Login</Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/resource">Resource</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Home = () => {
    return (
        <div className="my-[12rem] text-center">
            <p className="text-2xl font-bold">Keycloak Landing Page. You are at Home &trade;</p>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="py-7 bg-[#1b252d] text-white grid grid-cols-1 place-items-center w-full">
            <div className="shadow-lg">
                <div>
                    <div className="mb-4 text-white">
                        <p className="font-semibold">Subscribe to Newsletter</p>
                        <p>Get emails from me about web development, tech, and early access to new articles</p>
                    </div>
                    <div className="relative">
                        <input
                            placeholder="tim@apple.com"
                            className="p-3 text-[#4b586e] rounded-tl-full rounded-bl-full outline-none"
                        />
                        <button className="p-3 bg-[#4b586e] text-white rounded-tr-full rounded-br-full outline-none hover:bg-[#1b252e]">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="flex">
                        <li className="px-4">Facebook</li>
                        <li className="px-4">Instagram</li>
                        <li className="px-4">Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resource" element={<Resources />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
};
