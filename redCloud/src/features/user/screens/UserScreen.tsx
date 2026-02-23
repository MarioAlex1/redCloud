import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState, useEffect, useMemo } from "react";

import UserHeader from "../components/UserHeader";
import UserProfilePic from "../components/UserProfilePic";
import UserAccountOptions from "../components/UserAccountOptions";
import UserPreferences from "../components/UserPreferences";
import UserLogout from "../components/UserLogout";
import UserFooter from "../../../shared/components/FooterMenu";

import * as authStorage from '../../../storage/authStorage';
import { useTheme } from '../../../theme/ThemeContext';

export default function UserPage() {
    const { colors } = useTheme();
    const [nick, setNick] = useState('');
    const [audio, setAudio] = useState("Português");
    const [subtitle, setSubtitle] = useState("N/A");

    // Carrega as preferências e o nick salvos ao montar a tela
    useEffect(() => {
        const loadPreferences = async () => {
            const prefs = await authStorage.getPreferences();
            if (prefs) {
                setAudio(prefs.audio);
                setSubtitle(prefs.subtitle);
            }
            const savedNick = await authStorage.getNick();
            if (savedNick) setNick(savedNick);
        };
        loadPreferences();
    }, []);

    // Persiste as preferências sempre que o usuário as alterar
    useEffect(() => {
        authStorage.savePreferences({ audio, subtitle });
    }, [audio, subtitle]);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <UserHeader />
                    <UserProfilePic nick={nick} />
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