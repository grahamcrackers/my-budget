import { classNames } from "@my-budget/common";
import React, { Fragment, HTMLProps, useState } from "react";
import { CheckBox } from "../CheckBox";
import { useBudgetTable } from "./Context";
import { CategoryRow } from "./CategoryRow";
import { CategoryGroupRow } from "./CategoryGroupRow";
import { CheckCircleIcon, ChevronDownIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import { TableBody } from "./TableBody";
import {
    ColumnDef,
    ExpandedState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { GroupWithCategories, createBudgetTableRows } from "../BudgetTable2/utils";
import { categories, groups } from "@my-budget/mocks";

// const columnHelper = createColumnHelper<GroupWithCategories>();

// const columns =

// *sigh* fuck it, we are going to use `react-table`
export function BudgetTable() {
    const columns = React.useMemo<ColumnDef<GroupWithCategories>[]>(
        () => [
            {
                id: "selector",
                header: ({ table }) => (
                    <CheckBox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected() || false,
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                ),
                cell: ({ row, getValue }) => (
                    <CheckBox
                        {...{
                            checked: row.getIsSelected(),
                            indeterminate: row.getIsSomeSelected() || false,
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                ),
            },
            {
                id: "expander",
                header: ({ table }) => (
                    <button
                        {...{
                            onClick: table.getToggleAllRowsExpandedHandler(),
                        }}
                    >
                        {table.getIsAllRowsExpanded() ? "👇" : "👉"}
                    </button>
                ),
                cell: ({ row, getValue }) => (
                    <div>
                        <>
                            {row.getCanExpand() && (
                                <button
                                    {...{
                                        onClick: row.getToggleExpandedHandler(),
                                        style: { cursor: "pointer" },
                                    }}
                                >
                                    {row.getIsExpanded() ? "👇" : "👉"}
                                </button>
                            )}
                        </>
                    </div>
                ),
            },
            {
                id: "name",
                header: () => "Category",
                accessorFn: (row) => row.name,
            },
            {
                id: "activity",
                header: () => "Activity",
                accessorFn: (row) => row.activity,
            },
            {
                id: "assigned",
                header: () => "Assigned",
                accessorFn: (row) => row.assigned,
            },
            {
                id: "available",
                header: () => "Available",
                accessorFn: (row) => row.available,
            },
        ],
        [],
    );

    const [data, setData] = useState(() => createBudgetTableRows(groups, categories));

    const [rowSelection, setRowSelection] = useState({});
    const [expanded, setExpanded] = useState<ExpandedState>(true);

    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
            expanded,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onExpandedChange: setExpanded,
        getSubRows: (row) => row.categories,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        debugTable: true,
    });

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-300 sm:flex sm:items-center">
                <button
                    type="button"
                    // className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    className="inline-flex items-center gap-x-1.5 px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Category Group
                </button>
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="flow-root">
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
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <th key={header.id} colSpan={header.colSpan}>
                                                    {header.isPlaceholder ? null : (
                                                        <div>
                                                            {flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext(),
                                                            )}
                                                        </div>
                                                    )}
                                                </th>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </thead>
                            {/* <thead>
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
                                    <th scope="col" className="text-sm font-semibold text-left text-gray-900">
                                        <button onClick={() => setAllHidden(!allHidden)}>
                                            {allHidden ? (
                                                <ChevronRightIcon className="w-4 h-4" />
                                            ) : (
                                                <ChevronDownIcon className="w-4 h-4" />
                                            )}
                                        </button>
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
                                </tr>
                            </thead> */}
                            <tbody>
                                {table.getRowModel().rows.map((row) => {
                                    return (
                                        <tr key={row.id}>
                                            {row.getVisibleCells().map((cell) => {
                                                return (
                                                    <td key={cell.id}>
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                            {/* <TableBody />    */}
                            {/* <tbody className="bg-white divide-y divide-gray-200">
                                {groups.map((group) => (
                                    <Fragment key={group.id}>
                                        <CategoryGroupRow group={group} />
                                        {categories.map(
                                            (category) =>
                                                category.groupId === group.id && (
                                                    <CategoryRow key={category.id} category={category} />
                                                ),
                                        )}
                                    </Fragment>
                                ))}
                            </tbody> */}
                        </table>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
