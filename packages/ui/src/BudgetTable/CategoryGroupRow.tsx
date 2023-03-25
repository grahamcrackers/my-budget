import { CategoryGroup } from "@my-budget/common";
import { CheckBox } from "../CheckBox";
import { useBudgetTable } from "./Context";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fragment, useLayoutEffect, useState } from "react";
import { CategoryRow } from "./CategoryRow";

export interface CategoryGroupRowProps {
    group: CategoryGroup;
}

export const CategoryGroupRow = ({ group }: CategoryGroupRowProps) => {
    const { categories, selectedCategories, allHidden, toggleGroup, isIndeterminate, isChecked } = useBudgetTable();
    const [isHidden, setIsHidden] = useState(false);

    useLayoutEffect(() => {
        setIsHidden(allHidden);
    }, [allHidden]);

    // can probably be implemented better but i'm just trying to get everything layed out on the page
    const getCategorySum = (type: "assigned" | "activity" | "available") => {
        let sum = 0;
        categories.forEach((category) => {
            sum = sum + category[type];
        });

        return sum;
    };

    return (
        <Fragment>
            <tr className="bg-gray-100 border-t border-gray-200">
                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <CheckBox
                        value={group.id}
                        indetermiate={isIndeterminate(group.id, selectedCategories)}
                        checked={isChecked(group.id, selectedCategories)}
                        onChange={(e) => {
                            toggleGroup(e.target.checked, group);
                        }}
                    />
                </th>
                <th scope="col" className="text-sm font-semibold text-left text-gray-900">
                    <button onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? <ChevronRightIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                    </button>
                </th>
                <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                    {group.name}
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {getCategorySum("assigned")}
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {getCategorySum("activity")}
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {getCategorySum("available")}
                </th>
            </tr>
            {!isHidden &&
                categories.map(
                    (category) =>
                        category.groupId === group.id && <CategoryRow key={category.id} category={category} />,
                )}
        </Fragment>
    );
};
