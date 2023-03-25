import { BudgetTable } from "@my-budget/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { categories, groups } from "@my-budget/mocks";
import { Listbox, Transition } from "@my-budget/headless";
import { Fragment, useState } from "react";
// import { userEvent, within } from "@storybook/testing-library";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default {
    title: "Templates/Listbox",
    component: Listbox,
} as ComponentMeta<typeof Listbox>;

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
        <div className="fixed top-16 w-72">
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selectedPerson.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
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
