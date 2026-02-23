import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { makeHomeStyles } from "./HomeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

import HomeHeader from "../components/HomeHeader";
import HomeSection from "../components/HomeSection";
import HomeFooter from "../../../shared/components/FooterMenu";

// Tela home com banner de destaque e seções de ranking
export default function HomePage() {
    const { colors } = useTheme();
    const homeStyles = useMemo(() => makeHomeStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={homeStyles.screen}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <HomeHeader />

                    <HomeSection title="Populares" rankingType="bypopularity" limit={20} />
                    <HomeSection title="Top 10" rankingType="all" limit={10} />
                </ScrollView>

                <HomeFooter />
            </View>
        </>
    );
}
