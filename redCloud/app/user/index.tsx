import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState, useEffect, useMemo } from "react";

import UserHeader from "./UserHeader";
import UserProfilePic from "./UserProfilePic";
import UserAccountOptions from "./UserAccountOptions";
import UserPreferences from "./UserPreferences";
import UserLogout from "./UserLogout";
import UserFooter from "../../src/components/FooterMenu";

import * as authStorage from '../../src/storage/authStorage';
import { useTheme } from '../../src/theme/ThemeContext';

export default function UserPage() {
    const { colors } = useTheme();
    const [audio, setAudio] = useState("Português");
    const [subtitle, setSubtitle] = useState("N/A");

    // carregar as preferencias ao iniciar
    useEffect(() => {
        const loadPreferences = async () => {
            const prefs = await authStorage.getPreferences();
            if (prefs) {
                setAudio(prefs.audio);
                setSubtitle(prefs.subtitle);
            }
        };
        loadPreferences();
    }, []);

    // Salvar preferências sempre que mudarem
    useEffect(() => {
        authStorage.savePreferences({ audio, subtitle });
    }, [audio, subtitle]);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
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
                    <UserFooter />
                </ScrollView>

                <UserFooter />
            </View>
        </>
    );
}