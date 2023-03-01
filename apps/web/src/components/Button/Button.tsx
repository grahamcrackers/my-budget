import { classNames } from "../../utils";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const classes = classNames(
        "inline-flex items-center rounded-md border border-transparent bg-indigo-600",
        "px-4 py-2 text-sm font-medium text-white shadow-sm",
        "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    );

    return <button type="button" className={classes} {...props} />;
};
