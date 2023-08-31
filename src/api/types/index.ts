export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}
export interface FullGameInfo {
  id: number;
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  minimum_system_requirements: {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
  };
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: { id: number; image: string }[];
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
}

export type SortType =
  | "relevance"
  | "release-date"
  | "popularity"
  | "alphabetical";

export type platform = "all" | "pc" | "browser";

export interface LocalStorageItem {
  data: FullGameInfo;
  exp: number;
}
