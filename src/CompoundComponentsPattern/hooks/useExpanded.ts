import { useCallback, useMemo, useState } from "react";
const callFunctionsInSequence =
  (...fns: any[]) =>
  (...args: any) =>
    fns.forEach((fn) => fn && fn(...args));
export default function useExpanded() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  // const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  const getTogglerProps = useCallback(
    (customProps?: { [p: string]: any }) => ({
      "aria-expanded": expanded,
      ...customProps,
      onClick: callFunctionsInSequence(toggle, customProps?.onClick),
    }),
    [toggle, expanded]
  );

  return useMemo(
    () => ({ expanded, toggle, getTogglerProps }),
    [expanded, toggle, getTogglerProps]
  );
}
