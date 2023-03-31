import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

export interface CheckBoxProps extends ComponentPropsWithoutRef<"input"> {
    indeterminate?: boolean;
}

export type CheckBoxRef = HTMLInputElement;

/**
 * An indeterminate checkbox
 */
export function CheckBox({ indeterminate = false, ...props }: CheckBoxProps) {
    const checkboxRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        checkboxRef.current.indeterminate = indeterminate;
    }, [checkboxRef, indeterminate]);

    return (
        <input
            type="checkbox"
            className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
            ref={checkboxRef}
            {...props}
        />
    );
}
