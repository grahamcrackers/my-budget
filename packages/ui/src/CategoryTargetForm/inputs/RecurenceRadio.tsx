import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "@my-budget/common";
import { Controller, useFormContext } from "react-hook-form";
import { CategoryTargetInputs } from "../CategoryTargetForm";

const options = [
    { name: "Weekly", disabled: false },
    { name: "Monthly", disabled: false },
    { name: "Yearly", disabled: false },
    { name: "Custom", disabled: true },
];

export const RecurrenceRadio = () => {
    const [mem, setMem] = useState(options[1]);
    const { control } = useFormContext<CategoryTargetInputs>();
    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium leading-6 text-gray-900">RAM</h2>
                <a href="#" className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                    See performance specs
                </a>
            </div>
            <Controller
                control={control}
                name="recurrenceInterval"
                render={({ field }) => (
                    <RadioGroup
                        value={mem}
                        onChange={(e) => {
                            field.onChange(e);
                            setMem(e);
                        }}
                        className="mt-2"
                    >
                        <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                            {options.map((option) => (
                                <RadioGroup.Option
                                    key={option.name}
                                    value={option}
                                    className={({ active, checked }) =>
                                        classNames(
                                            !option.disabled
                                                ? "cursor-pointer focus:outline-none"
                                                : "cursor-not-allowed opacity-25",
                                            active ? "ring-2 ring-indigo-600 ring-offset-2" : "",
                                            checked
                                                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                                                : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                                            "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1",
                                        )
                                    }
                                    disabled={option.disabled}
                                >
                                    <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                )}
            />
        </div>
    );
};
