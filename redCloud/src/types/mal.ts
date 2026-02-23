// URLs da imagem do anime (tamanhos medium e large)
export interface MalPicture {
  medium: string;
  large: string;
}

// Dados básicos de um anime retornado pela MAL API
export interface MalAnimeNode {
  id: number;
  title: string;
  main_picture: MalPicture;
  mean?: number;
}

// Item de ranking, contém o anime e sua posição
export interface MalRankingItem {
  node: MalAnimeNode;
  ranking: { rank: number };
}

// Item de resultado de busca, contém apenas o anime
export interface MalSearchItem {
  node: MalAnimeNode;
}

// Tipos de ranking disponíveis na MAL API
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
