import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { makeRegisterStyles } from "./RegisterScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

import RegisterHeader from "../components/RegisterHeader";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
    const { colors } = useTheme();
    const registerStyles = useMemo(() => makeRegisterStyles(colors), [colors]);
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <ImageBackground
                source={require("../../../assets/images/fundoLoginRegister.png")}
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