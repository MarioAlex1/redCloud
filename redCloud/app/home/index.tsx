// Aqui vai ser a tela onde vai ficar a rota /home
import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { homeStyles } from "../../src/styles/home.styles";

import HomeHeader from "./HomeHeader";
import HomeSection from "./HomeSection";
import HomeFooter from "../../src/components/FooterMenu";

export default function HomePage() {
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
