import { CategoryTargetForm } from "@my-budget/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Example/CategoryTargetForm",
    component: CategoryTargetForm,
    // tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof CategoryTargetForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
