import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    const getInitialValue = () => {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    };

    if (jsonValue !== null) {
      try {
        return JSON.parse(jsonValue);
      } catch {
        return getInitialValue();
      }
    }

    return getInitialValue();
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as const;
}
