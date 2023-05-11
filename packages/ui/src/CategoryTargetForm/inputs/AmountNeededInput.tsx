import { useFormContext } from "react-hook-form";
import { CategoryTargetInputs } from "../CategoryTargetForm";

export const AmountNeededInput = () => {
    const { register } = useFormContext<CategoryTargetInputs>();
    return (
        <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    id="amount"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                    aria-describedby="amount-currency"
                    {...register("amount")}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                        USD
                    </span>
                </div>
            </div>
        </div>
    );
};
