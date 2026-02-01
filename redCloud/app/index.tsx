import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { initialStyles } from "../src/styles/initial.styles";

export default function Initial() {
    return (
        <ImageBackground
            source={require("../assets/images/fundoLogin.png")}
            style={initialStyles.background}
            resizeMode="cover"
        >
            <View style={initialStyles.skipContainer}>
                <Link href="/home" replace asChild>
                    <TouchableOpacity>
                        <Text style={initialStyles.skipText}>Pular</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            <View style={initialStyles.buttonsContainer}>
                <Link href="/login" asChild>
                    <TouchableOpacity style={initialStyles.buttonLogin}>
                        <Text style={initialStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/register" asChild>
                    <TouchableOpacity style={initialStyles.buttonRegister}>
                        <Text style={initialStyles.buttonTextRegister}>
                            Registre-se
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </ImageBackground>
    );
}