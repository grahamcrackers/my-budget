import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useBudgetTable } from "../BudgetTable";
import { Category } from "@my-budget/common";
import { useState } from "react";
import { CategoryTargetForm } from "../CategoryTargetForm";

interface CategoryTargetCardProps {
    category: Category;
}

export const CategoryTargetCard = ({ category }: CategoryTargetCardProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Target</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
                {!showForm && (
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setShowForm(true)}
                    >
                        <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                        {`Create ${category?.name} Target`}
                    </button>
                )}
                {showForm && <CategoryTargetForm />}
            </div>
        </div>
    );
};
