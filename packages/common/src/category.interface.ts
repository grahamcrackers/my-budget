import { CategoryGroup } from "./category-group.interface";

export interface Category {
    id: string;
    name: string;
    assigned: number;
    activity: number;
    available: number;
    groupId: string;
    // group?: CategoryGroup;
}
