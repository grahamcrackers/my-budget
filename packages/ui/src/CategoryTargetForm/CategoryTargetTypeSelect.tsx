import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@my-budget/common";
import { Controller, useFormContext } from "react-hook-form";
import { CategoryTargetInputs } from "./CategoryTargetForm";

const types = [
    { id: 1, name: "Needed For Spending", icon: "", description: "" },
    { id: 2, name: "Savings Balance" },
    { id: 3, name: "Monthly Savings Builder" },
    { id: 4, name: "Monthly Debt Payment" },
];

export const CategoryTargetTypeSelect = () => {
    const [selected, setSelected] = useState(types[0]);
    const { control } = useFormContext<CategoryTargetInputs>();

    return (
        <Controller
            control={control}
            name="type"
            render={({ field }) => (
                <Listbox
                    value={selected}
                    onChange={(e) => {
                        field.onChange(e);
                        setSelected(e);
                    }}
                >
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                                Target Type
                            </Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <span className="block truncate">{selected.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {types.map((type) => (
                                            <Listbox.Option
                                                key={type.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                                                        "relative cursor-default select-none py-2 pl-8 pr-4",
                                                    )
                                                }
                                                value={type}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span
                                                            className={classNames(
                                                                selected ? "font-semibold" : "font-normal",
                                                                "block truncate",
                                                            )}
                                                        >
                                                            {type.name}
                                                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? "text-white" : "text-indigo-600",
                                                                    "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                                                )}
                                                            >
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
                        </>
                    )}
                </Listbox>
            )}
        />
    );
};
