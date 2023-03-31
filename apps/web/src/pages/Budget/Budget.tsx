import { Category, CategoryGroup } from "@my-budget/common";
import { BudgetTable, BudgetTableProvider, Page } from "@my-budget/ui";
import { useEffect, useState } from "react";

export const Budget = () => {
    const [groups, setGroups] = useState<CategoryGroup[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("/groups");
            const data = await response.json();
            setGroups(data);
            // setGroups(data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await fetch("/categories");
            const data = await response.json();
            setCategories(data);
            // setGroups(data);
        })();
    }, []);

    return (
        <Page>
            <Page.Header></Page.Header>
            <Page.Wrapper>
                <Page.Main>
                    <BudgetTableProvider groups={groups} categories={categories}>
                        <BudgetTable />
                    </BudgetTableProvider>
                </Page.Main>
                <Page.Aside></Page.Aside>
            </Page.Wrapper>
        </Page>
    );
};
