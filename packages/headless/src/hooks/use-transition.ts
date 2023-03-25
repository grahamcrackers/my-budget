import { MutableRefObject } from "react";

import { transition } from "../utils/transition";
import { disposables } from "../utils/disposables";

import { useDisposables } from "./use-disposables";
import { useIsMounted } from "./use-is-mounted";
import { useIsoMorphicEffect } from "./use-iso-morphic-effect";
import { useLatestValue } from "./use-latest-value";

interface TransitionArgs {
    container: MutableRefObject<HTMLElement | null>;
    classes: MutableRefObject<{
        enter: string[];
        enterFrom: string[];
        enterTo: string[];

        leave: string[];
        leaveFrom: string[];
        leaveTo: string[];

        entered: string[];
    }>;
    direction: "enter" | "leave" | "idle";
    onStart: MutableRefObject<(direction: TransitionArgs["direction"]) => void>;
    onStop: MutableRefObject<(direction: TransitionArgs["direction"]) => void>;
}

export function useTransition({ container, direction, classes, onStart, onStop }: TransitionArgs) {
    const mounted = useIsMounted();
    const d = useDisposables();

    const latestDirection = useLatestValue(direction);

    useIsoMorphicEffect(() => {
        const dd = disposables();
        d.add(dd.dispose);

        const node = container.current;
        if (!node) return; // We don't have a DOM node (yet)
        if (latestDirection.current === "idle") return; // We don't need to transition
        if (!mounted.current) return;

        dd.dispose();

        onStart.current(latestDirection.current);

        dd.add(
            transition(node, classes.current, latestDirection.current === "enter", () => {
                dd.dispose();
                onStop.current(latestDirection.current);
            }),
        );

        return dd.dispose;
    }, [direction]);
}
