import { classNames } from "@my-budget/common";
import React, { Fragment } from "react";
import { CheckBox } from "../CheckBox";
import { useBudgetTable } from "./Context";

export const BudgetTable: React.FC = () => {
    const {
        categories,
        groups,
        checkboxRef,
        checked,
        selectedCategories,
        toggleAll,
        toggleCategory,
        toggleGroup,
        isIndeterminate,
        isChecked,
    } = useBudgetTable();

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flow-root mt-8">
                <div className="-mx-4 -my-2 overflow-y-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        {/* <div className="relative"> */}
                        {/* {selectedCategories.length > 0 && (
                                <div className="absolute top-0 flex items-center h-12 space-x-3 bg-white left-14 sm:left-12">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-900 bg-white rounded shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                    >
                                        Bulk edit
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-900 bg-white rounded shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                    >
                                        Delete all
                                    </button>
                                </div>
                            )} */}
                        <table className="min-w-full overflow-y-auto divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                        <input
                                            type="checkbox"
                                            className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
                                            ref={checkboxRef}
                                            checked={checked}
                                            onChange={toggleAll}
                                        />
                                    </th>
                                    <th
                                        scope="col"
                                        className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Assigned
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Activity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Available
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {groups.map((group) => (
                                    <Fragment key={group.id}>
                                        <tr className="bg-gray-100 border-t border-gray-200">
                                            {/* <th
                                                    colSpan={5}
                                                    scope="colgroup"
                                                    className="py-2 pl-4 pr-3 text-sm font-semibold text-left text-gray-900 bg-gray-50 sm:pl-3"
                                                >
                                                    {group.name}
                                                </th> */}
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
                                            <th
                                                scope="col"
                                                className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                {group.name}
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Assigned
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Activity
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Available
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                        {categories.map(
                                            (category) =>
                                                category.groupId === group.id && (
                                                    <tr
                                                        key={category.id}
                                                        className={
                                                            selectedCategories.includes(category)
                                                                ? "bg-gray-50"
                                                                : undefined
                                                        }
                                                    >
                                                        <td className="relative px-7 sm:w-12 sm:px-6">
                                                            {selectedCategories.includes(category) && (
                                                                <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                                            )}
                                                            <input
                                                                type="checkbox"
                                                                className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
                                                                value={category.id}
                                                                checked={selectedCategories.includes(category)}
                                                                onChange={(e) =>
                                                                    toggleCategory(e.target.checked, category)
                                                                }
                                                            />
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                                                selectedCategories.includes(category)
                                                                    ? "text-indigo-600"
                                                                    : "text-gray-900",
                                                            )}
                                                        >
                                                            {category.name}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                            {category.assigned}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                            {category.activity}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                            {category.available}
                                                        </td>
                                                        <td className="py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-3">
                                                            <a
                                                                href="#"
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Edit
                                                                <span className="sr-only">, {category.name}</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ),
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
