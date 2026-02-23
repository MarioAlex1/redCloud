import { useState, useEffect, useRef } from "react";
import { searchAnime, getAnimeRanking } from "../../../services/malApiService";
import { MalAnimeNode } from "../../../types/mal";

// Aplica debounce no input e busca animes por nome ou exibe os mais populares por padrão
export function useAnimeSearch() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<MalAnimeNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Aguarda 500ms após o usuário parar de digitar antes de buscar
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      runSearch(inputValue);
    }, 500);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [inputValue]);

  // Executa a busca por nome ou carrega os mais populares se não houver query
  function runSearch(query: string) {
    let active = true;
    setLoading(true);
    setError(null);

    const fetch =
      query.trim().length > 0
        ? searchAnime(query.trim(), 21).then((data) => data.map((d) => d.node))
        : getAnimeRanking("bypopularity", 21).then((data) => data.map((d) => d.node));

    fetch
      .then((nodes) => { if (active) setItems(nodes); })
      .catch(() => { if (active) setError("Não foi possível carregar. Verifique sua conexão."); })
      .finally(() => { if (active) setLoading(false); });

    return () => { active = false; };
  }

  const title = inputValue.trim().length > 0 ? `Resultados para "${inputValue}"` : "Mais Populares";

  return { inputValue, setInputValue, items, loading, error, title };
}
