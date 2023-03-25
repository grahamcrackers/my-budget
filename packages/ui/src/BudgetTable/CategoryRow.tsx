import { Category, CategoryGroup, classNames } from "@my-budget/common";
import { useBudgetTable } from "./Context";

export interface CategoryRowProps {
    category: Category;
}

export const CategoryRow: React.FC<CategoryRowProps> = ({ category }: CategoryRowProps) => {
    const { selectedCategories, toggleCategory } = useBudgetTable();

    return (
        <tr className={selectedCategories.includes(category) ? "bg-gray-50" : undefined}>
            <td className="relative px-7 sm:w-12 sm:px-6">
                {selectedCategories.includes(category) && (
                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                )}
                <input
                    type="checkbox"
                    className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
                    value={category.id}
                    checked={selectedCategories.includes(category)}
                    onChange={(e) => toggleCategory(e.target.checked, category)}
                />
            </td>
            <td className="text-sm text-gray-500 whitespace-nowrap"></td>
            <td
                className={classNames(
                    "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                    selectedCategories.includes(category) ? "text-indigo-600" : "text-gray-900",
                )}
            >
                {category.name}
            </td>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{category.assigned}</td>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{category.activity}</td>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{category.available}</td>
        </tr>
    );
};
