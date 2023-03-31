import { Category } from "@my-budget/common";
import { categories, groups } from "@my-budget/mocks";
import { flexRender } from "@tanstack/react-table";
import { useBudgetTable } from "./BudgetTableContext";

interface GroupWithCategories extends Omit<Category, "groupId"> {
    groupId?: string;
    categories?: GroupWithCategories[];
}

export function BudgetTable() {
    const { table } = useBudgetTable();

    return (
        <div>
            {/* <div className="px-4 sm:px-6 lg:px-8"> */}
            {/* <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div> */}
            <div className="flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative">
                            {/* {selectedPeople.length > 0 && (
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

                            <table className="min-w-full divide-y divide-gray-300 table-fixed">
                                <thead>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => {
                                                return (
                                                    <th
                                                        key={header.id}
                                                        colSpan={header.colSpan}
                                                        scope="col"
                                                        className={headerClassNames(header.id)}
                                                    >
                                                        {header.isPlaceholder ? null : (
                                                            <>
                                                                {flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext(),
                                                                )}
                                                            </>
                                                        )}
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {table.getRowModel().rows.map((row) => {
                                        return (
                                            <tr key={row.id} className={row.getIsSelected() ? "bg-gray-50" : undefined}>
                                                {row.getVisibleCells().map((cell) => {
                                                    return (
                                                        <td key={cell.id} className={cellClassNames(cell.id)}>
                                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// TODO: get headers from column ids
const headerClassNames = (headerId: string) => {
    switch (headerId) {
        case "selector":
            return "relative px-7 sm:w-12 sm:px-6";
        case "name":
            return "min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900";
        default:
            return "px-3 py-3.5 text-left text-sm font-semibold text-gray-900";
    }
};

const cellClassNames = (cellId: string) => {
    const id = cellId.split("_")[1];

    switch (id) {
        case "selector":
            return "relative px-7 sm:w-12 sm:px-6";
        default:
            return "whitespace-nowrap px-3 py-4 text-sm text-gray-500";
    }
};
