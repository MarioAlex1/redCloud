import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState, useMemo } from "react";
import { makeListStyles } from "./ListScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";

import ListHeader from "../components/ListHeader";
import ListTabs from "../components/ListTabs";
import ListEmptyState from "../components/ListEmptyState";
import UserFooter from "../../../shared/components/FooterMenu";

export type ListTab = "assistidos" | "naoAssistidos" | "downloads";

export default function ListPage() {
    const { colors } = useTheme();
    const ListStyles = useMemo(() => makeListStyles(colors), [colors]);
    const [activeTab, setActiveTab] = useState<ListTab>("naoAssistidos");

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <ListHeader />

                <ListTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                <ScrollView contentContainerStyle={ListStyles.listContainer}>
                    <ListEmptyState tab={activeTab} />
                </ScrollView>

                <UserFooter />
            </View>
        </>
    );
}