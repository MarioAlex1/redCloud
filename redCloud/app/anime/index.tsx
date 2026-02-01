import { ScrollView } from "react-native";
import { useState } from "react";
import { animeStyles } from "../../src/styles/anime.styles";

import AnimeHeader from "./AnimeHeader";
import AnimeActions from "./AnimeActions";
import AnimeSecondaryActions from "./AnimeSecondaryActions";
import SeasonSelector from "./SeasonSelector";
import EpisodeList from "./EpisodeList";

export default function AnimeDetails() {
    const [selectedSeason, setSelectedSeason] = useState(1);
    const [seasonListOpen, setSeasonListOpen] = useState(false);
    const [liked, setLiked] = useState(false);

    return (
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
    );
}