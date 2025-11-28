import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Feather, AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { animeStyles } from "../styles/animeStyles";

export default function AnimeDetails() {
    const [selectedSeason, setSelectedSeason] = useState(1);
    const [seasonListOpen, setSeasonListOpen] = useState(false);
    const [liked, setLiked] = useState(false);

    const seasons = [1, 2, 3, 4];

    // EPISÓDIOS USANDO IMAGENS DO TEU PROJETO
    const episodes = [
        {
            id: 1,
            title: "To You, in 2000 Years",
            duration: "24 min",
            image: require("../assets/images/jujutsu.png"), // só pra simular
            description: "A queda da Muralha Maria muda tudo para Eren...",
        },
        {
            id: 2,
            title: "That Day",
            duration: "24 min",
            image: require("../assets/images/fragrantFlower.png"), // só pra simular
            description: "Eren testemunha o terror causado pelos Titãs...",
        },
    ];

    return (
        <ScrollView style={animeStyles.screen}>

            {/* CAPA — usando a mesma da home */}
            <Image
                source={require("../assets/images/atackOnTitan.png")}
                style={animeStyles.cover}
            />

            <View style={animeStyles.content}>

                <Text style={animeStyles.title}>Attack on Titan</Text>

                <View style={animeStyles.infoRow}>
                    <Text style={animeStyles.infoText}>2013</Text>
                    <Text style={animeStyles.infoText}>16+</Text>
                    <Text style={animeStyles.infoText}>4 temporadas</Text>
                </View>

                <Text style={animeStyles.description}>
                    A humanidade está à beira da extinção após a aparição dos Titãs.
                    Eren Yeager decide lutar contra essas criaturas para salvar a todos.
                </Text>

                {/* BOTÕES */}
                <View style={animeStyles.actionRow}>
                    <TouchableOpacity style={animeStyles.playButton}>
                        <Feather name="play" size={22} color="#fff" />
                        <Text style={animeStyles.buttonText}>Assistir</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={animeStyles.downloadButton}>
                        <Feather name="download" size={22} color="#fff" />
                        <Text style={animeStyles.buttonText}>Baixar</Text>
                    </TouchableOpacity>
                </View>

                {/* AÇÕES SECUNDÁRIAS */}
                <View style={animeStyles.secondaryActions}>
                    <TouchableOpacity style={animeStyles.secondaryItem}>
                        <Feather name="plus" size={26} color="#fff" />
                        <Text style={animeStyles.secondaryText}>Minha Lista</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            animeStyles.secondaryItem,
                            liked && animeStyles.likedButton  // aplica estilo quando estiver marcado
                        ]}
                        onPress={() => setLiked(!liked)}
                    >
                        <AntDesign
                            name="like"
                            size={26}
                            color={liked ? "#e50914" : "#fff"}
                        />
                        <Text
                            style={[
                                animeStyles.secondaryText,
                                liked && { color: "#e50914" } // muda o texto também
                            ]}
                        >
                            Gostei
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={animeStyles.secondaryItem}>
                        <Entypo name="share" size={26} color="#fff" />
                        <Text style={animeStyles.secondaryText}>Compartilhar</Text>
                    </TouchableOpacity>
                </View>

                {/* SELETOR DE TEMPORADA */}
                <TouchableOpacity
                    onPress={() => setSeasonListOpen(!seasonListOpen)}
                    style={animeStyles.seasonSelector}
                >
                    <Text style={animeStyles.seasonSelectorText}>
                        Temporada {selectedSeason}
                    </Text>
                    <Ionicons
                        name={seasonListOpen ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="#fff"
                    />
                </TouchableOpacity>

                {seasonListOpen && (
                    <View style={animeStyles.seasonList}>
                        {seasons.map((s) => (
                            <TouchableOpacity
                                key={s}
                                onPress={() => {
                                    setSelectedSeason(s);
                                    setSeasonListOpen(false);
                                }}
                                style={animeStyles.seasonItem}
                            >
                                <Text style={animeStyles.seasonItemText}>
                                    Temporada {s}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* EPISÓDIOS */}
                {episodes.map((ep) => (
                    <View key={ep.id} style={animeStyles.episodeCard}>

                        <Image source={ep.image} style={animeStyles.episodeImage} />

                        <View style={animeStyles.episodeInfo}>
                            <Text style={animeStyles.episodeTitle}>{ep.title}</Text>
                            <Text style={animeStyles.episodeDuration}>{ep.duration}</Text>
                            <Text style={animeStyles.episodeDescription}>
                                {ep.description}
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <Feather name="download" size={24} color="#fff" />
                        </TouchableOpacity>

                    </View>
                ))}

            </View>
        </ScrollView>
    );
}