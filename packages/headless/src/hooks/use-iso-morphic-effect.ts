import { useLayoutEffect, useEffect, EffectCallback, DependencyList } from "react";
import { env } from "../utils/env";

export const useIsoMorphicEffect = (effect: EffectCallback, deps?: DependencyList | undefined) => {
    if (env.isServer) {
        useEffect(effect, deps);
    } else {
        useLayoutEffect(effect, deps);
    }
};
