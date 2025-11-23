import React from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { Stack } from "expo-router";
import { loginStyles } from "../styles/loginStyles";

export default function LoginPage() {
    return (
        <>
            {/* isso remove o header */}
            <Stack.Screen options={{ headerShown: false }} />

            <ImageBackground
                source={require("../assets/images/fundoLogin.png")}
                style={loginStyles.background}
                resizeMode="cover"
            >
                {/* botão de skip */}
                <View style={loginStyles.skipContainer}>
                    <TouchableOpacity>
                        <Text style={loginStyles.skipText}>Pular</Text>
                    </TouchableOpacity>
                </View>

                <View style={loginStyles.buttonsContainer}>
                    <TouchableOpacity style={loginStyles.buttonLogin}>
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={loginStyles.buttonRegister}>
                        <Text style={loginStyles.buttonTextRegister}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}