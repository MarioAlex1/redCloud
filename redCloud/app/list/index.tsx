import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import { ListStyles } from "../../src/styles/list.styles";

import ListHeader from "./ListHeader";
import ListTabs from "./ListTabs";
import ListEmptyState from "./ListEmptyState";
import ListFooter from "./ListFooter";

export type ListTab = "assistidos" | "naoAssistidos" | "downloads";

export default function ListPage() {
    const [activeTab, setActiveTab] = useState<ListTab>("naoAssistidos");

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: "#000" }}>
                <ListHeader />

                <ListTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                <ScrollView contentContainerStyle={ListStyles.listContainer}>
                    <ListEmptyState tab={activeTab} />
                </ScrollView>

                <ListFooter />
            </View>
        </>
    );
}