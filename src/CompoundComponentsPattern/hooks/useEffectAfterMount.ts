import { useEffect, useRef } from "react";

export default function useEffectAfterMount(
  cb: (params?: any) => void,
  deps: any[]
) {
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (componentJustMounted.current) {
      return cb();
    }
    componentJustMounted.current = false;
  }, [...deps]);
}
