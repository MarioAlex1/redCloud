import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { makeSearchStyles } from "./SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo, useState, useEffect, useRef } from "react";

import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

export default function SearchPage() {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);

    const [inputValue, setInputValue] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Aplica debounce de 500ms no input para evitar chamadas desnecessárias à API
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setDebouncedQuery(inputValue);
        }, 500);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [inputValue]);

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
                    <SearchList query={debouncedQuery} />
                </ScrollView>
            </View>
        </>
    );
}