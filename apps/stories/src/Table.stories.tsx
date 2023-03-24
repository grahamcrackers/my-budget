import { BudgetTable } from "@my-budget/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { categories, groups } from "@my-budget/mocks";
import { Listbox, Transition, Table } from "@my-budget/headless";
import { Fragment, useState } from "react";
// import { userEvent, within } from "@storybook/testing-library";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default {
    title: "Templates/Table",
    component: Table,
} as ComponentMeta<typeof Table>;

const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const Template: ComponentStory<typeof Listbox> = (args) => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    return (
        <div>
            <Table value={groups}>
                {({ value }) => (
                    <thead>
                        <tr>{JSON.stringify(value)}</tr>
                    </thead>
                )}
            </Table>
        </div>
    );
};

export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// LoggedIn.play = async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole("button", { name: /Log in/i });
//     await userEvent.click(loginButton);
// };
