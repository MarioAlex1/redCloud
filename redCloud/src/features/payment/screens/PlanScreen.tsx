import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

import PlanHeader from "../components/PlanHeader";
import PlanBanner from "../components/PlanBanner";
import PlanBenefits from "../components/PlanBenefits";
import PlanSubscribeButton from "../components/PlanSubscribeButton";

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