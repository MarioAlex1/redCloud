import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { makeLoginStyles } from "./LoginScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const { colors } = useTheme();
    const loginStyles = useMemo(() => makeLoginStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <ImageBackground
                source={require("../../../assets/images/fundoLoginRegister.png")}
                style={loginStyles.background}
                resizeMode="cover"
            >
                <View style={loginStyles.topCard}>
                    <LoginHeader />
                    <LoginForm />
                </View>
            </ImageBackground>
        </>
    );
}