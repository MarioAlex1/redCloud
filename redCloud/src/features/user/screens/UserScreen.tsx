import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";

import UserHeader from "../components/UserHeader";
import UserProfilePic from "../components/UserProfilePic";
import UserAccountOptions from "../components/UserAccountOptions";
import UserPreferences from "../components/UserPreferences";
import UserLogout from "../components/UserLogout";
import UserFooter from "../../../shared/components/FooterMenu";
import { useUserPreferences } from "../hooks/useUserPreferences";
import { useTheme } from '../../../theme/ThemeContext';

// Tela de perfil com foto, opções de conta, preferências e logout
export default function UserPage() {
    const { colors } = useTheme();
    const { nick, audio, setAudio, subtitle, setSubtitle } = useUserPreferences();

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