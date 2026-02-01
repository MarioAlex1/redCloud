import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { loginStyles } from "../../src/styles/login.styles";

import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginPage() {
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