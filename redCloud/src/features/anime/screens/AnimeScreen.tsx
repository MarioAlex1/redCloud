import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState, useMemo } from "react";
import { makeAnimeStyles } from "./AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";

import AnimeHeader from "../components/AnimeHeader";
import AnimeActions from "../components/AnimeActions";
import AnimeSecondaryActions from "../components/AnimeSecondaryActions";
import SeasonSelector from "../components/SeasonSelector";
import EpisodeList from "../components/EpisodeList";

export default function AnimeDetails() {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    const [selectedSeason, setSelectedSeason] = useState(1);
    const [seasonListOpen, setSeasonListOpen] = useState(false);
    const [liked, setLiked] = useState(false);

    return (
        <>
            <Stack.Screen options={{ headerTransparent: true, headerTitle: "", headerTintColor: "#ffffff" }} />
            <ScrollView style={animeStyles.screen}>
            <AnimeHeader />

            <AnimeActions />

            <AnimeSecondaryActions
                liked={liked}
                onToggleLike={() => setLiked(!liked)}
            />

            <SeasonSelector
                selectedSeason={selectedSeason}
                open={seasonListOpen}
                onToggle={() => setSeasonListOpen(!seasonListOpen)}
                onSelectSeason={(s:number) => {
                    setSelectedSeason(s);
                    setSeasonListOpen(false);
                }}
            />

            <EpisodeList season={selectedSeason} />
        </ScrollView>
        </>
    );
}