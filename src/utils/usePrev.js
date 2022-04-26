import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const prev = useRef();
  useEffect(() => {
    console.log("name in useEffect", value);

    prev.current = value;
    console.log(prev);
  }, [value]);

  console.log("name, prevName ", value, prev.current);
  return prev.current;
};
