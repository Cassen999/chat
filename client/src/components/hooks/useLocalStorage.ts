import { useEffect, useState } from "react";

const PREFIX = 'chat-';

export default function useLocalStorage(key: any, initialValue?: any) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (!!jsonValue) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value).trim());
  }, [prefixedKey, value]);

  return [value, setValue];
}