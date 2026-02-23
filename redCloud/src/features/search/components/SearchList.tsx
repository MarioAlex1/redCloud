import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { makeSearchStyles } from "../screens/SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { MalAnimeNode } from "../../../types/mal";

interface Props {
    items: MalAnimeNode[];
    loading: boolean;
    error: string | null;
    title: string;
}

export default function SearchList({ items, loading, error, title }: Props) {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);

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