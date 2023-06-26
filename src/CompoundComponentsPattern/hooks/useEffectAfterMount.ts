import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export default function useEffectAfterMount(
  cb: EffectCallback,
  deps: DependencyList | undefined
) {
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
      return cb();
    }
    componentJustMounted.current = false;
  }, deps);
}
