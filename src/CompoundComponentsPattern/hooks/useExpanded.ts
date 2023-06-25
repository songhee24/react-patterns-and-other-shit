import { useCallback, useMemo, useState } from "react";
const callFunctionsInSequence =
  (...fns: any[]) =>
  (...args: any) =>
    fns.forEach((fn) => fn && fn(...args));
export default function useExpanded(initialExpanded = false) {
  const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  const [resetDep, setResetDep] = useState<number>(0);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const reset = useCallback(() => {
    // look here 👇
    setExpanded(initialExpanded);
    setResetDep((resetDep) => resetDep + 1);
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
    () => ({ expanded, toggle, getTogglerProps, reset, resetDep }),
    [expanded, toggle, getTogglerProps, reset, resetDep]
  );
}
