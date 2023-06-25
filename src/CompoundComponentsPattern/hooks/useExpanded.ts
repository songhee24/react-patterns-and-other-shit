import { useCallback, useMemo, useRef, useState } from "react";
const callFunctionsInSequence =
  (...fns: any[]) =>
  (...args: any) =>
    fns.forEach((fn) => fn && fn(...args));
export default function useExpanded(initialExpanded = false) {
  const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const resetRef = useRef(0);

  const reset = useCallback(() => {
    // look here 👇
    setExpanded(initialExpanded);
    ++resetRef.current;
  }, [initialExpanded]);

  const getTogglerProps = useCallback(
    (customProps?: { [p: string]: any }) => ({
      "aria-expanded": expanded,
      ...customProps,
      onClick: callFunctionsInSequence(toggle, customProps?.onClick),
    }),
    [toggle, expanded]
  );

  return useMemo(
    () => ({
      expanded,
      toggle,
      getTogglerProps,
      reset,
      resetDep: resetRef.current,
    }),
    [expanded, toggle, getTogglerProps, reset]
  );
}
