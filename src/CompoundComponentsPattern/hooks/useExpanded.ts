import { useCallback, useMemo, useState } from "react";

export default function useExpanded() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  // const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  const togglerProps = useMemo(
    () => ({
      onClick: toggle,
      "aria-expanded": expanded,
    }),
    [toggle, expanded]
  );

  return useMemo(
    () => ({ expanded, toggle, togglerProps }),
    [expanded, toggle, togglerProps]
  );
}
