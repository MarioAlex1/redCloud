import axios from 'axios';
import { MalRankingItem, MalRankingType, MalSearchItem } from '../types/mal';

const MAL_CLIENT_ID = process.env.EXPO_PUBLIC_MAL_CLIENT_ID ?? '';

// Instância do axios configurada com a base URL e o client ID do MAL
const malApi = axios.create({
  baseURL: 'https://api.myanimelist.net/v2',
  headers: {
    'X-MAL-CLIENT-ID': MAL_CLIENT_ID,
  },
});

// Busca animes por nome
export const searchAnime = async (
  query: string,
  limit = 20,
): Promise<MalSearchItem[]> => {
  try {
    // Faz GET na rota /anime com o termo de busca e retorna a lista de resultados
    const response = await malApi.get<{ data: MalSearchItem[] }>(
      `/anime?q=${encodeURIComponent(query)}&limit=${limit}&fields=main_picture,mean`,
    );
    return response.data.data;
  } catch (error) {
    const err = error as any;
    console.error('Erro ao buscar animes:', err.response?.data ?? err.message);
    throw error;
  }
};

// Busca o ranking de animes
export const getAnimeRanking = async (
  rankingType: MalRankingType = 'all',
  limit = 20,
): Promise<MalRankingItem[]> => {
  try {
    // Faz GET na rota /anime/ranking pelo tipo de ranking e retorna a lista ordenada
    const response = await malApi.get<{ data: MalRankingItem[] }>(
      `/anime/ranking?ranking_type=${rankingType}&limit=${limit}&fields=main_picture,mean`,
    );
    return response.data.data;
  } catch (error) {
    const err = error as any;
    console.error('Erro ao buscar ranking do MAL:', err.response?.data ?? err.message);
    throw error;
  }
};