import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { registerStyles } from "../../src/styles/register.styles";

import RegisterHeader from "./RegisterHeader";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    return (
        <>
            <Stack.Screen options={{ headerShown: true }} />

            <ImageBackground
                source={require("../../assets/images/fundoLoginRegister.png")}
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