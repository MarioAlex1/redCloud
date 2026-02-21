import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { makeRegisterStyles } from "../../src/styles/register.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

import RegisterHeader from "./RegisterHeader";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    const { colors } = useTheme();
    const registerStyles = useMemo(() => makeRegisterStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <ImageBackground
                source={require("../../src/assets/images/fundoLoginRegister.png")}
                style={registerStyles.background}
                resizeMode="cover"
            >
                <View style={registerStyles.topCard}>
                    <RegisterHeader />
                    <RegisterForm />
                </View>
            </ImageBackground>
        </>
    );
}