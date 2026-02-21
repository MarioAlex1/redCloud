import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

import PlanHeader from "./PlanHeader";
import PlanBanner from "./PlanBanner";
import PlanBenefits from "./PlanBenefits";
import PlanSubscribeButton from "./PlanSubscribeButton";

export default function PlanPage() {
    const { colors } = useTheme();
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <PlanHeader />
                    <PlanBanner />
                    <PlanBenefits />
                    <PlanSubscribeButton />
                </ScrollView>
            </View>
        </>
    );
}