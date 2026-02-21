// Aqui vai ser a tela onde vai ficar a rota /home
import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { makeHomeStyles } from "../../src/styles/home.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

import HomeHeader from "./HomeHeader";
import HomeSection from "./HomeSection";
import HomeFooter from "../../src/components/FooterMenu";

export default function HomePage() {
    const { colors } = useTheme();
    const homeStyles = useMemo(() => makeHomeStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={homeStyles.screen}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <HomeHeader />

                    <HomeSection title="Populares" />
                    <HomeSection title="Top 10" />
                </ScrollView>

                <HomeFooter />
            </View>
        </>
    );
}
