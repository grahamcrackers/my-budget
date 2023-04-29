import type { Meta, StoryObj } from "@storybook/react";
import { BudgetTable, BudgetTableProvider } from "@my-budget/ui";
import { categories, groups } from "@my-budget/mocks";

const meta = {
    title: "Example/BudgetTable",
    component: BudgetTable,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <BudgetTableProvider
                categories={categories}
                groups={groups}
                onSelected={(categories) => console.log(categories)}
            >
                <Story />
            </BudgetTableProvider>
        ),
    ],
} satisfies Meta<typeof BudgetTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
