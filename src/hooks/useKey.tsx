import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.code.toLocaleLowerCase() === key.toLocaleLowerCase()) {
        action?.();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [key, action]);
}
