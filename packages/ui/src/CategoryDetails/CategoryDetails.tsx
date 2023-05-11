import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Category } from "@my-budget/common";
import { PropsWithChildren } from "react";

interface CategoryDetailsProps {
    categories: Category[];
}

export const CategoryDetails = ({ children, categories }: PropsWithChildren<CategoryDetailsProps>) => {
    const title = categories.length === 1 ? categories[0].name : `${categories.length} Categories Selected`;
    return (
        <div className="flex flex-col h-full py-6 overflow-y-scroll min-w-[24rem]">
            {categories.length > 0 && (
                <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                        <div className="text-base font-semibold leading-6 text-gray-900">{title}</div>
                        <div className="flex items-center ml-3 h-7">
                            <button
                                type="button"
                                className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => console.log("click")}
                            >
                                <span className="sr-only">edit category</span>
                                <PencilIcon className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="relative flex-1 px-4 mt-6 sm:px-6">{children}</div>
        </div>
    );
};
