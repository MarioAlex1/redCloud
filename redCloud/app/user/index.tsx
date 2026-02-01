import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

import UserHeader from "./UserHeader";
import UserProfilePic from "./UserProfilePic";
import UserAccountOptions from "./UserAccountOptions";
import UserPreferences from "./UserPreferences";
import UserLogout from "./UserLogout";
import UserFooter from "../../src/components/FooterMenu";

export default function UserPage() {
    const [audio, setAudio] = useState("Português");
    const [subtitle, setSubtitle] = useState("N/A");

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: "#000" }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <UserHeader />
                    <UserProfilePic />
                    <UserAccountOptions />

                    <UserPreferences
                        audio={audio}
                        subtitle={subtitle}
                        onChangeAudio={setAudio}
                        onChangeSubtitle={setSubtitle}
                    />

                    <UserLogout />
                    <UserFooter/>
                </ScrollView>

                <UserFooter />
            </View>
        </>
    );
}