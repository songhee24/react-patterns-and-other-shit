import { useCallback, useMemo, useState } from "react";

export default function useExpanded() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  // const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
}
