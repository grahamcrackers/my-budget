/**
 * Helper utility to make classnames easier for state logic
 *
 * @example classNames('absolute p-4', active ? 'text-white' : 'text-indigo-600')
 */
export const classNames = (...classes: (false | null | undefined | string)[]): string => {
    return classes.filter(Boolean).join(" ");
};
