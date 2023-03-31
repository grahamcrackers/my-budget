import { Category, CategoryGroup } from "@my-budget/common";

/**
 * used for the budget table
 */
export interface GroupWithCategories extends Omit<Category, "groupId"> {
    groupId?: string;
    categories?: GroupWithCategories[];
}

export const createBudgetTableRows = (groups: CategoryGroup[], categories: Category[]): GroupWithCategories[] => {
    return groups.map((group) => {
        const filteredCategories = categories.filter((c) => c.groupId === group.id);
        return {
            ...group,
            assigned: 0,
            activity: 0,
            available: 0,
            categories: filteredCategories,
        };
    });
};
