export interface MalPicture {
  medium: string;
  large: string;
}

export interface MalAnimeNode {
  id: number;
  title: string;
  main_picture: MalPicture;
  mean?: number;
}

export interface MalRankingItem {
  node: MalAnimeNode;
  ranking: { rank: number };
}

export interface MalSearchItem {
  node: MalAnimeNode;
}

export type MalRankingType =
  | 'all'
  | 'airing'
  | 'upcoming'
  | 'tv'
  | 'ova'
  | 'movie'
  | 'special'
  | 'bypopularity'
  | 'favorite';
