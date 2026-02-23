import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { makeSearchStyles } from "./SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { useAnimeSearch } from "../hooks/useAnimeSearch";

import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

// Tela de busca com debounce e lista de resultados ou populares
export default function SearchPage() {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);
    const { inputValue, setInputValue, items, loading, error, title } = useAnimeSearch();

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <ScrollView
                    style={SearchStyles.screen}
                    contentContainerStyle={{ paddingBottom: 120 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <SearchBar value={inputValue} onChangeText={setInputValue} />
                    <SearchList items={items} loading={loading} error={error} title={title} />
                </ScrollView>
            </View>
        </>
    );
}