import React from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { initialStyles } from "../styles/initialStyles";

export default function LoginPage() {
    return (
        <>
            <ImageBackground
                source={require("../assets/images/fundoLogin.png")}
                style={initialStyles.background}
                resizeMode="cover"
            >
                {/* botão de skip */}
                <View style={initialStyles.skipContainer}>
                    <TouchableOpacity>
                        <Text style={initialStyles.skipText}>Pular</Text>
                    </TouchableOpacity>
                </View>

                <View style={initialStyles.buttonsContainer}>
                    <Link href="/login" asChild>
                    <TouchableOpacity style={initialStyles.buttonLogin}>
                        <Text style={initialStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    </Link>

                    <Link href="/register" asChild>
                    <TouchableOpacity style={initialStyles.buttonRegister}>
                        <Text style={initialStyles.buttonTextRegister}>Registre-se</Text>
                    </TouchableOpacity>
                    </Link>
                </View>
            </ImageBackground>
        </>
    )
}