import { CategoryGroup } from "@my-budget/common";

export interface CategoryGroupRowProps {
    group: CategoryGroup;
}

export const CategoryGroupRow: React.FC<CategoryGroupRowProps> = ({ group }: CategoryGroupRowProps) => {
    return (
        <tr className="bg-gray-100 border-t border-gray-200">
            {/* <th
                                                    colSpan={5}
                                                    scope="colgroup"
                                                    className="py-2 pl-4 pr-3 text-sm font-semibold text-left text-gray-900 bg-gray-50 sm:pl-3"
                                                >
                                                    {group.name}
                                                </th> */}
            <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                <input
                    type="checkbox"
                    className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
                    ref={checkbox}
                    checked={checked}
                    onChange={toggleAll}
                />
            </th>
            <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                {group.name}
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Assigned
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Activity
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Available
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    );
};
