import { toast } from "react-hot-toast";
import { Button } from "../../components";
import { SidebarLayout } from "../../layouts";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const Dashboard: React.FC = () => {
    const handleClick = () => {
        toast.custom((t) => (
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                            <p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
                        </div>
                        <div className="ml-4 flex flex-shrink-0">
                            <button
                                type="button"
                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    //  setShow(false);
                                }}
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
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
        </SidebarLayout>
    );
};
