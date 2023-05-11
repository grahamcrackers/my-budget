import { CategoryTargetDetails } from "@my-budget/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Example/CategoryTargetDetails",
    component: CategoryTargetDetails,
    // tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof CategoryTargetDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
