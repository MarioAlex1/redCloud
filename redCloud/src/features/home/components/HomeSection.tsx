import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { makeHomeStyles } from "../screens/HomeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { MalRankingType } from "../../../types/mal";
import { useAnimeRanking } from "../hooks/useAnimeRanking";

interface Props {
    title: string;
    rankingType?: MalRankingType;
    limit?: number;
}

export default function HomeSection({ title, rankingType = 'all', limit = 20 }: Props) {
    const { colors } = useTheme();
    const homeStyles = useMemo(() => makeHomeStyles(colors), [colors]);
    const { items, loading, error } = useAnimeRanking(rankingType, limit);

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>{title}</Text>

            {loading && (
                <ActivityIndicator
                    size="large"
                    color={colors.primary}
                    style={homeStyles.loadingContainer}
                />
            )}

            {!loading && error && (
                <View style={homeStyles.errorContainer}>
                    <Text style={homeStyles.errorText}>{error}</Text>
                </View>
            )}

            {!loading && !error && (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={homeStyles.cardRow}
                >
                    {items.map((item) => (
                        <View key={item.node.id} style={homeStyles.cardWrapper}>
                            <Image
                                source={{ uri: item.node.main_picture?.large ?? item.node.main_picture?.medium }}
                                style={homeStyles.card}
                            />
                            <Text style={homeStyles.cardTitle} numberOfLines={2}>
                                {item.node.title}
                            </Text>
                            {item.node.mean != null && (
                                <Text style={homeStyles.cardRating}>★ {item.node.mean.toFixed(1)}</Text>
                            )}
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}