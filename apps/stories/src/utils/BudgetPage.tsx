import { Category } from "@my-budget/common";
import { categories, groups } from "@my-budget/mocks";
import { BudgetTable, BudgetTableProvider, CategoryTargetCard, CategoryDetails, Page } from "@my-budget/ui";
import { useState } from "react";
import { PlaceHolder } from "./PlaceHolder";

export const BudgetPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const category = selectedCategories.length === 1 ? selectedCategories[0] : undefined;

    return (
        <Page>
            <Page.Wrapper>
                <Page.Main>
                    <BudgetTableProvider
                        categories={categories}
                        groups={groups}
                        onSelected={(categories) => setSelectedCategories(categories)}
                    >
                        <BudgetTable />
                    </BudgetTableProvider>
                </Page.Main>
                <Page.Aside>
                    <CategoryDetails categories={selectedCategories}>
                        {category && <CategoryTargetCard category={category} />}
                    </CategoryDetails>
                </Page.Aside>
            </Page.Wrapper>
        </Page>
    );
};
