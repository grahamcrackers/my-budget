import { Category, CategoryGroup } from "@my-budget/common";
import {
    ColumnDef,
    ExpandedState,
    Row,
    RowSelectionState,
    Table,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useContext,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { CheckBox } from "../CheckBox";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { createBudgetTableRows } from "./utils";

interface GroupWithCategories extends Omit<Category, "groupId"> {
    groupId?: string;
    categories?: GroupWithCategories[];
}

export interface BudgetTableInputs {
    categories: Category[];
    groups: CategoryGroup[];
}

const BudgetTableContext = createContext<({ table: Table<GroupWithCategories> } & BudgetTableInputs) | null>(null);

export const useBudgetTable = () => {
    const context = useContext(BudgetTableContext);
    if (context === null) {
        const err = new Error(`useBudgetTable must be used inside <BudgetTableProvider />`);
        if (Error.captureStackTrace) Error.captureStackTrace(err, useBudgetTable);
        throw err;
    }

    return context;
};

export const BudgetTableProvider = ({ children, categories, groups }: PropsWithChildren<BudgetTableInputs>) => {
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [expanded, setExpanded] = useState<ExpandedState>(true);

    const toggleExpandAllRows = (row: Row<GroupWithCategories>) => {};

    const columns = useMemo<ColumnDef<GroupWithCategories>[]>(
        () => [
            {
                id: "selector",
                header: ({ table }) => (
                    <CheckBox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected() ?? false,
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                ),
                cell: ({ row, getValue }) => (
                    <CheckBox
                        {...{
                            checked: row.getIsSelected(),
                            indeterminate: row.getIsSomeSelected() ?? false,
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
                        {table.getIsAllRowsExpanded() ? (
                            <ChevronDownIcon className="w-4 h-4" />
                        ) : (
                            <ChevronRightIcon className="w-4 h-4" />
                        )}
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
                                    {row.getIsExpanded() ? (
                                        <ChevronDownIcon className="w-4 h-4" />
                                    ) : (
                                        <ChevronRightIcon className="w-4 h-4" />
                                    )}
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

    const table = useReactTable({
        data: useMemo(() => createBudgetTableRows(groups, categories), [groups, categories]),
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
        <BudgetTableContext.Provider
            value={{
                // pass original props
                categories: categories ?? [],
                groups: groups ?? [],
                // pass the rest of our props
                table,
            }}
        >
            {children}
        </BudgetTableContext.Provider>
    );
};
