"use client";

import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** A real mouse/trackpad — touch devices get the static layout. */
export const FINE_POINTER = "(hover: hover) and (pointer: fine)";
export const DESKTOP_HOVER = `${FINE_POINTER} and (min-width: 768px)`;
