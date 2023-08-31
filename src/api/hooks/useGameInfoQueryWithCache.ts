import { useLazyGetGameInfoQuery } from "../gamesApi";
import { FullGameInfo, LocalStorageItem } from "../types";
import { useEffect } from "react";

const CACHE_STORAGE_TIME = 300_000;

export function useGameInfoQueryWithCache(id: number): {
  data: FullGameInfo | undefined;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
} {
  const [trigger, { data, isLoading, isError, isSuccess }] =
    useLazyGetGameInfoQuery();
  const candidate = localStorage.getItem(String(id));
  if (candidate) {
    const localStorageItem = JSON.parse(candidate) as LocalStorageItem;
    if (localStorageItem.exp > Date.now()) {
      return {
        data: localStorageItem.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    } else localStorage.removeItem(String(id));
  }

  useEffect(() => {
    const { abort, unsubscribe } = trigger(id);

    return () => {
      abort();
      unsubscribe();
    };
  }, []);

  if (isSuccess && data) {
    localStorage.setItem(
      String(id),
      JSON.stringify({
        data,
        exp: Date.now() + CACHE_STORAGE_TIME,
      })
    );
  }
  return {
    data,
    isLoading,
    isSuccess,
    isError,
  };
}
