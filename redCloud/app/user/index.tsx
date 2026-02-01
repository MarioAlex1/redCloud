import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

import { UserStyles } from "../../src/styles/user.styles";

import UserHeader from "./UserHeader";
import UserProfilePic from "./UserProfilePic";
import UserAccountOptions from "./UserAccountOptions";
import UserPreferences from "./UserPreferences";
import UserLogout from "./UserLogout";
import UserFooter from "./UserFooter";

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
                </ScrollView>

                <UserFooter />
            </View>
        </>
    );
}