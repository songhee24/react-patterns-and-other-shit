import { useCallback, useMemo, useState } from "react";

export default function useExpanded() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  // const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  const getTogglerProps = useCallback(
    () => ({
      onClick: toggle,
      "aria-expanded": expanded,
    }),
    [toggle, expanded]
  );

  return useMemo(
    () => ({ expanded, toggle, getTogglerProps }),
    [expanded, toggle, getTogglerProps]
  );
}
