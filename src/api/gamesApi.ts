import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { FullGameInfo, Game, platform, SortType } from "./types";
import { makeQueryString } from "./utils/makeQueryString/makeQueryString";

export type Params = {
  tag?: string[];
  platform?: platform;
  sort?: SortType;
};

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: "https://games-api-v1.vercel.app",
    }),
    { maxRetries: 3 }
  ),
  endpoints: (builder) => ({
    getGameList: builder.query<
      Game[] | { status: number; status_message: string },
      Params
    >({
      query: (params) => makeQueryString(params),
    }),
    getGameInfo: builder.query<FullGameInfo, number>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const { useGetGameListQuery, useLazyGetGameInfoQuery } = gamesApi;
