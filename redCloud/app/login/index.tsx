import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { makeLoginStyles } from "../../src/styles/login.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    const { colors } = useTheme();
    const loginStyles = useMemo(() => makeLoginStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <ImageBackground
                source={require("../../src/assets/images/fundoLoginRegister.png")}
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