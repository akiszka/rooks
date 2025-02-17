import { useFreshRef } from "./useFreshRef";

function useFreshTick(callback: (...args: any[]) => void) {
  const freshRef = useFreshRef(callback);
  function tick(...args) {
    if (typeof freshRef.current === "function") {
      freshRef.current(...args);
    }
  }

  return tick;
}

export { useFreshTick };
