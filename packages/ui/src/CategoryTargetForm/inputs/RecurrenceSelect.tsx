import { useFormContext } from "react-hook-form";
import { CategoryTargetInputs } from "../CategoryTargetForm";

const options = {
    weekly: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthly: [
        "Last Day of Month",
        "31st",
        "30th",
        "29th",
        "28th",
        "27th",
        "26th",
        "25th",
        "24th",
        "23rd",
        "22nd",
        "21st",
        "20th",
        "19th",
        "18th",
        "17th",
        "16th",
        "15th",
        "14th",
        "13th",
        "12th",
        "11th",
        "10th",
        "9th",
        "8th",
        "7th",
        "6th",
        "5th",
        "4th",
        "3rd",
        "2nd",
        "1st",
    ],
};

export const RecurrenceSelect = () => {
    const { register } = useFormContext<CategoryTargetInputs>();
    return (
        <div>
            <label htmlFor="recurrence" className="block text-sm font-medium leading-6 text-gray-900">
                Location
            </label>
            <select
                id="recurrence-day"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={options.monthly[0]}
                {...register("recurrenceDay")}
            >
                {options.monthly.map((day) => (
                    <option key={day}>{day}</option>
                ))}
            </select>
        </div>
    );
};
