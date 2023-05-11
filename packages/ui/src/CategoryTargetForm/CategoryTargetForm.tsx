import { FormProvider, useForm } from "react-hook-form";
import { CategoryTargetTypeSelect } from "./CategoryTargetTypeSelect";
import { AmountNeededInput } from "./inputs/AmountNeededInput";
import { CancelTargetButton } from "./inputs/CancelTargetButton";
import { DeleteTargetButton } from "./inputs/DeleteTargetButton";
import { RecurrenceRadio } from "./inputs/RecurenceRadio";
import { RecurrenceSelect } from "./inputs/RecurrenceSelect";
import { SaveTargetButton } from "./inputs/SaveTargetButton";

export interface CategoryTargetInputs {
    type: string;
    amount: number;
    recurrenceInterval: string;
    recurrenceDay: number;
}

export const CategoryTargetForm = () => {
    const methods = useForm<CategoryTargetInputs>({
        defaultValues: {
            type: "NFS",
            amount: 0,
            recurrenceInterval: "monthly",
            recurrenceDay: 31,
        },
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
                <CategoryTargetTypeSelect />
                <AmountNeededInput />
                <RecurrenceRadio />
                <RecurrenceSelect />
                <div className="flex justify-between pt-1">
                    <div className="flex gap-1">
                        <DeleteTargetButton />
                        <CancelTargetButton />
                    </div>
                    <div>
                        <SaveTargetButton />
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};
