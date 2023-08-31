import { LocalStorageItem } from "../types";

export function clearLocalStorage(): NodeJS.Timeout {
  return setTimeout(() => {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) keys.push(key);
    }
    keys.forEach((key) => {
      const localStorageItem = JSON.parse(
        localStorage.getItem(key) as string
      ) as LocalStorageItem;
      if (localStorageItem.exp < Date.now()) {
        localStorage.removeItem(key);
      }
    });
  }, 60_000);
}
