import { Fragment } from "react";
import { useBudgetTable } from "./Context";
import { CategoryGroupRow } from "./CategoryGroupRow";
import { CategoryRow } from "./CategoryRow";

export const TableBody = () => {
    const { groups, categories } = useBudgetTable();
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {groups.map((group) => (
                <Fragment key={group.id}>
                    <CategoryGroupRow group={group} />
                    {/* {categories.map(
                        (category) =>
                            category.groupId === group.id && <CategoryRow key={category.id} category={category} />,
                    )} */}
                </Fragment>
            ))}
        </tbody>
    );
};
