import { Category, CategoryGroup } from "@my-budget/common";
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useContext,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

export interface BudgetTableInputs {
    categories: Category[];
    groups: CategoryGroup[];
    onSelected?(categories: Category[]): void;
}

const BudgetTableContext = createContext<
    | ({
          checkboxRef: MutableRefObject<HTMLInputElement | null>;
          checked: boolean;
          collapsed: boolean;
          selectedCategories: Category[];
          selectedGroups: CategoryGroup[];
          collapsedGroups: CategoryGroup[];
          toggleAll(): void;
          collapseAll(): void;
          toggleCategory(checked: boolean, category: Category): void;
          toggleGroup(checked: boolean, group: CategoryGroup): void;
          collapseGroup(collapse: boolean, group: CategoryGroup): void;
          isIndeterminate(groupId: string, selectedCategories: Category[]): boolean;
          isChecked(groupId: string, selectedCategories: Category[]): boolean;
      } & BudgetTableInputs)
    | null
>(null);

export const useBudgetTable = () => {
    const context = useContext(BudgetTableContext);
    if (context === null) {
        const err = new Error(`useBudgetTable must be used inside <BudgetTableProvider />`);
        if (Error.captureStackTrace) Error.captureStackTrace(err, useBudgetTable);
        throw err;
    }

    return context;
};

// consider a reducer

export const BudgetTableProvider = ({
    children,
    categories,
    groups,
    onSelected,
}: PropsWithChildren<BudgetTableInputs>) => {
    const checkbox = useRef<HTMLInputElement>(null!);
    const [checked, setChecked] = useState<boolean>(false);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    const [collapsedGroups, setCollapsedGroups] = useState<CategoryGroup[]>([]);
    const [selectedGroups, setSelectedGroups] = useState<CategoryGroup[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    useLayoutEffect(() => {
        const isIndeterminate = selectedCategories.length > 0 && selectedCategories.length < categories.length;
        setChecked(selectedCategories.length === categories.length);
        setIndeterminate(isIndeterminate);
        checkbox.current.indeterminate = isIndeterminate;

        if (onSelected) onSelected(selectedCategories);
    }, [selectedCategories, selectedGroups]);

    useLayoutEffect(() => {
        setCollapsed(collapsedGroups.length === groups.length);
    }, [collapsedGroups]);

    const toggleAll = () => {
        setSelectedCategories(checked || indeterminate ? [] : categories);
        setSelectedGroups(checked || indeterminate ? [] : groups);
        setChecked(!checked && !indeterminate);
        setIndeterminate(false);
    };

    const collapseAll = () => {
        setCollapsedGroups(collapsed ? [] : groups);
        setCollapsed(!collapsed);
    };

    const toggleCategory = (checked: boolean, category: Category) => {
        setSelectedCategories(
            checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category),
        );
    };

    // should only select the group and categories but also toggleAll box will be indeterminate
    const toggleGroup = (checked: boolean, group: CategoryGroup) => {
        setSelectedGroups(checked ? [...selectedGroups, group] : selectedGroups.filter((g) => g !== group));
        const newCategories = categories.filter((c) => c.groupId === group.id);

        setSelectedCategories(
            checked
                ? Array.from(new Set([...selectedCategories, ...newCategories])) // removes duplicates
                : selectedCategories.filter((c) => c.groupId !== group.id),
        );
    };

    const collapseGroup = (collapsed: boolean, group: CategoryGroup) => {
        setCollapsedGroups(collapsed ? [...collapsedGroups, group] : collapsedGroups.filter((g) => g !== group));
    };

    // can this be refactored? probably. but it works for right now
    const isIndeterminate = (groupId: string, selectedCategories: Category[]): boolean => {
        const allCategoriesForGroup = categories.filter((c) => c.groupId === groupId);
        const selectedCategoriesInGroup = selectedCategories.filter((c) => c.groupId === groupId);

        return selectedCategoriesInGroup.length > 0 && selectedCategoriesInGroup.length < allCategoriesForGroup.length;
    };

    const isChecked = (groupId: string, selectedCategories: Category[]): boolean => {
        const allCategoriesForGroup = categories.filter((c) => c.groupId === groupId);
        const selectedCategoriesInGroup = selectedCategories.filter((c) => c.groupId === groupId);

        return (
            selectedCategoriesInGroup.length > 0 && selectedCategoriesInGroup.length === allCategoriesForGroup.length
        );
    };

    return (
        <BudgetTableContext.Provider
            value={{
                // pass original props
                categories: categories ?? [],
                groups: groups ?? [],
                // pass the rest of our props
                checkboxRef: checkbox,
                checked,
                collapsed,
                selectedCategories,
                selectedGroups,
                collapsedGroups,
                toggleAll,
                collapseAll,
                toggleCategory,
                toggleGroup,
                collapseGroup,
                isIndeterminate,
                isChecked,
            }}
        >
            {children}
        </BudgetTableContext.Provider>
    );
};
