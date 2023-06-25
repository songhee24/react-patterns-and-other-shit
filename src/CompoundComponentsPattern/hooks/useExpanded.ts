import { useCallback, useMemo, useReducer, useRef, useState } from "react";
const callFunctionsInSequence =
  (...fns: any[]) =>
  (...args: any) =>
    fns.forEach((fn) => fn && fn(...args));

const internalReducer = (
  state: { expanded: boolean },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case useExpanded.types.toggleExpand:
      return {
        ...state,
        expanded: !state.expanded,
      };
    case useExpanded.types.reset:
      return {
        ...state,
        expanded: action.payload,
      };
    case useExpanded.types.override:
      return {
        ...state,
        expanded: !state.expanded,
      };
    default:
      throw new Error(`Action type ${action.type} not handled`);
  }
};
export default function useExpanded(initialExpanded = false) {
  const initialState = { expanded: initialExpanded };
  // const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  const toggle = useCallback(
    () =>
      setExpanded({
        type: useExpanded.types.toggleExpand,
      }),
    []
  );

  const [{ expanded }, setExpanded] = useReducer(internalReducer, initialState);

  const resetRef = useRef(0);

  const reset = useCallback(() => {
    // look here 👇
    setExpanded({
      type: useExpanded.types.reset,
      payload: initialExpanded, // pass a payload "initialExpanded"
    });
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
  override: "OVERRIDE",
};
