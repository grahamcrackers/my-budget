import { Category, CategoryGroup } from "@my-budget/common";
import { create } from "zustand";

interface CategoriesState {
    categories: Category[];
    setCategories: (categories: Category[]) => void;
    /** A list of id's of selected groups */
    selectedCategories: string[];
    addSelectedCategory: (id: string) => void;
    removeSelectedCategory: (id: string) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
    categories: [],
    setCategories: (categories) => set(() => ({ categories })),
    selectedCategories: [],
    addSelectedCategory: (categoryId: string) =>
        set(({ selectedCategories }) => ({ selectedCategories: [...selectedCategories, categoryId] })),
    removeSelectedCategory: (categoryId: string) =>
        set(({ selectedCategories }) => ({
            selectedCategories: selectedCategories.filter((id) => id !== categoryId),
        })),
}));
