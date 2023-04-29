import { CategoryGroup } from "@my-budget/common";
import { create } from "zustand";

interface GroupsState {
    groups: CategoryGroup[];
    setGroups: (groups: CategoryGroup[]) => void;
    /** A list of id's of selected groups */
    selectedGroups: string[];
}

export const useGroupsStore = create<GroupsState>((set) => ({
    groups: [],
    setGroups: (groups) => set(() => ({ groups })),
    selectedGroups: [],
    addSelectedGroup: (id: string) => set(({ selectedGroups }) => ({ selectedGroups: [...selectedGroups, id] })),
    removeSelectedGroup: (id: string) =>
        set(({ selectedGroups }) => ({
            selectedGroups: selectedGroups.filter((g) => g !== id),
        })),
}));
