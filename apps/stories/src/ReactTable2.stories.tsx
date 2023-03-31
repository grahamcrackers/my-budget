import { ReactTable2 } from "@my-budget/ui";
import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";

const meta = {
    title: "Example/ReactTable2",
    component: ReactTable2,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ["autodocs"],
} satisfies Meta<typeof ReactTable2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
