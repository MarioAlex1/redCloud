import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";

import PlanHeader from "./PlanHeader";
import PlanBanner from "./PlanBanner";
import PlanBenefits from "./PlanBenefits";
import PlanSubscribeButton from "./PlanSubscribeButton";

export default function PlanPage() {
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <View style={{ flex: 1, backgroundColor: "#000" }}>
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