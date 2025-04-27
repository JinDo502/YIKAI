'use client';
import { useEffect, useState } from "react";

const useMediaQuery = (minWidth: number) => {
  // const viewportWidth = window.innerWidth >= minWidth;
  const [isPc, setIsPc] = useState(true);

  useEffect(() => {
    //if the breakPoint is error, then do nothing
    if (!minWidth) return;

    const mediaQuery = window.matchMedia(`(min-width:${minWidth}px)`);
    setIsPc(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsPc(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [minWidth]);

  return isPc;
};

export default useMediaQuery;
