import { useState, useEffect } from "react";
import { getAnimeRanking } from "../../../services/malApiService";
import { MalRankingItem, MalRankingType } from "../../../types/mal";

// Busca o ranking da MAL API ao montar ou quando o tipo/limite mudar
export function useAnimeRanking(rankingType: MalRankingType = "all", limit = 20) {
  const [items, setItems] = useState<MalRankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    getAnimeRanking(rankingType, limit)
      .then((data) => { if (active) setItems(data); })
      .catch(() => { if (active) setError("Não foi possível carregar. Verifique sua conexão."); })
      .finally(() => { if (active) setLoading(false); });

    return () => { active = false; };
  }, [rankingType, limit]);

  return { items, loading, error };
}
