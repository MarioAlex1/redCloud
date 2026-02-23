import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { makeSearchStyles } from "../screens/SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo, useEffect, useState } from "react";
import { searchAnime, getAnimeRanking } from "../../../services/malApiService";
import { MalAnimeNode } from "../../../types/mal";

interface Props {
    query: string;
}

export default function SearchList({ query }: Props) {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);

    const [items, setItems] = useState<MalAnimeNode[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        setLoading(true);
        setError(null);

        const fetch = query.trim().length > 0
            ? searchAnime(query.trim(), 21).then(data => data.map(d => d.node))
            : getAnimeRanking('bypopularity', 21).then(data => data.map(d => d.node));

        fetch
            .then(nodes => { if (active) setItems(nodes); })
            .catch(() => { if (active) setError('Não foi possível carregar. Verifique sua conexão.'); })
            .finally(() => { if (active) setLoading(false); });

        return () => { active = false; };
    }, [query]);

    const title = query.trim().length > 0 ? `Resultados para "${query}"` : 'Mais Populares';

    return (
        <>
            <View style={SearchStyles.titleContainer}>
                <Text style={SearchStyles.title}>{title}</Text>
            </View>

            {loading && (
                <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }} />
            )}

            {!loading && error && (
                <View style={SearchStyles.errorContainer}>
                    <Text style={SearchStyles.errorText}>{error}</Text>
                </View>
            )}

            {!loading && !error && (
                <FlatList
                    data={items}
                    keyExtractor={item => String(item.id)}
                    numColumns={3}
                    scrollEnabled={false}
                    columnWrapperStyle={SearchStyles.gridRow}
                    renderItem={({ item }) => (
                        <View style={SearchStyles.gridCard}>
                            <Image
                                source={{ uri: item.main_picture?.large ?? item.main_picture?.medium }}
                                style={SearchStyles.gridImage}
                            />
                            <Text style={SearchStyles.gridTitle} numberOfLines={2}>{item.title}</Text>
                            {item.mean != null && (
                                <Text style={SearchStyles.gridRating}>★ {item.mean.toFixed(1)}</Text>
                            )}
                        </View>
                    )}
                />
            )}
        </>
    );
}