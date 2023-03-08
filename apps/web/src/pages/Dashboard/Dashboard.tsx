import { toast } from "react-hot-toast";
import { Button } from "../../components";
import { SidebarLayout } from "../../layouts";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { client } from "../../utils/client";

export const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    useEffect(() => {
        (async () => {
            const results = await client("examples");
            console.log(results);
        })();
    }, []);

    const handleClick = () => {
        toast.custom((t) => (
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <CheckCircleIcon className="w-6 h-6 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                            <p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
                        </div>
                        <div className="flex flex-shrink-0 ml-4">
                            <button
                                type="button"
                                className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    //  setShow(false);
                                }}
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <SidebarLayout>
            <Button onClick={handleClick}>Click Me</Button>
            <Button onClick={() => logout()}>Log Out</Button>
        </SidebarLayout>
    );
};
