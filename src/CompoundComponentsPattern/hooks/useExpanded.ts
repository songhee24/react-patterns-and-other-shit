import { useCallback, useMemo, useReducer, useRef, useState } from "react";
const callFunctionsInSequence =
  (...fns: any[]) =>
  (...args: any) =>
    fns.forEach((fn) => fn && fn(...args));

const internalReducer = (
  state: { expanded: boolean },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case useExpanded.types.toggleExpand:
      return {
        ...state,
        expanded: !state.expanded, //toggle expand state property
      };
    case useExpanded.types.reset:
      return {
        ...state,
        expanded: action.payload, // reset expanded with a payload
      };
    default:
      throw new Error(`Action type ${action.type} not handled`);
  }
};
export default function useExpanded(initialExpanded = false) {
  const initialState = { expanded: initialExpanded };
  // const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const [{ expanded }, setExpanded] = useReducer(internalReducer, initialState);

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

useExpanded.types = {
  toggleExpand: "EXPAND",
  reset: "RESET",
};
