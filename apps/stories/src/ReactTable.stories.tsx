import { ReactTable } from "@my-budget/ui";
import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";

const Styles = styled.div`
    padding: 1rem;

    table {
        border-spacing: 0;
        border: 1px solid black;

        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }
    }
`;

function IndeterminateCheckbox({
    indeterminate,
    // eslint-disable-next-line react/prop-types
    className = "",
    ...rest
}: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) {
    const ref = React.useRef<HTMLInputElement>(null!);

    React.useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return <input type="checkbox" ref={ref} className={className + " cursor-pointer"} {...rest} />;
}

const meta = {
    title: "Example/ReactTable",
    component: ReactTable,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            // <Styles>
            <Story />
            // </Styles>
        ),
    ],
} satisfies Meta<typeof ReactTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
