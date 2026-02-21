import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { makeSearchStyles } from "./SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

export default function SearchPage() {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <ScrollView
                    style={SearchStyles.screen}
                    contentContainerStyle={{ paddingBottom: 120 }}
                >
                    <SearchBar />
                    <SearchList />
                </ScrollView>
            </View>
        </>
    );
}