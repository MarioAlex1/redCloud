import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { SearchStyles } from "../../src/styles/search.styles";

import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

export default function SearchPage() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: "#000" }}>
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