import { ElementType, Fragment, Ref, createRef, useMemo } from "react";
import { Props } from "../../types";
import { useSyncRefs } from "../../hooks/use-sync-refs";
import { HasDisplayName, RefProp, forwardRefWithAs, render } from "../../utils/render";

// interface StateDefinition<T> {
//     dataRef;
// }

// ---

const DEFAULT_TABLE_TAG = Fragment;
interface TableRenderPropArg<T> {
    value: T;
}

export type TableProps<TTag extends ElementType, TType, TActualType> = Props<
    TTag,
    TableRenderPropArg<TType>,
    "value"
> & {
    value?: TType;
};

function TableFn<
    TTag extends ElementType = typeof DEFAULT_TABLE_TAG,
    TType = string,
    TActualType = TType extends (infer U)[] ? U : TType,
>(props: TableProps<TTag, TType, TActualType>, ref: Ref<HTMLElement>) {
    const { value, ...theirProps } = props;

    const tableRef = useSyncRefs(ref);

    // const [state, dispatch] = useReducer(stateReducer, {
    //     dataRef: createRef(),
    // } as StateDefinition<TType>);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const slot = useMemo<TableRenderPropArg<TType>>(() => ({ value }), [value]);

    const ourProps = { ref: tableRef };

    return render({ ourProps, theirProps, slot, defaultTag: DEFAULT_TABLE_TAG, name: "Table" });
}
// ----
interface ComponentTable extends HasDisplayName {
    <
        TTag extends ElementType = typeof DEFAULT_TABLE_TAG,
        TType = string,
        TActualType = TType extends (infer U)[] ? U : TType,
    >(
        props: TableProps<TTag, TType, TActualType> & RefProp<typeof TableFn>,
    ): JSX.Element;
}

const TableRoot = forwardRefWithAs(TableFn) as unknown as ComponentTable;

export const Table = Object.assign(TableRoot, {});
