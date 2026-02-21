import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState, useMemo } from "react";
import { makeListStyles } from "../../src/styles/list.styles";
import { useTheme } from "../../src/theme/ThemeContext";

import ListHeader from "./ListHeader";
import ListTabs from "./ListTabs";
import ListEmptyState from "./ListEmptyState";
import UserFooter from "../../src/components/FooterMenu";

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