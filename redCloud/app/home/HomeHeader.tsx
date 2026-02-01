import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { homeStyles } from "../../src/styles/home.styles";

export default function HomeHeader() {
    return (
        <View style={homeStyles.ImageContainer}>
            <ImageBackground
                source={require("../../assets/images/atackOnTitan.png")}
                style={homeStyles.titanImage}
                resizeMode="cover"
            >
                <View style={homeStyles.overlay}>
                    <View style={homeStyles.buttonsRow}>
                        <Link href="/search" asChild>
                            <TouchableOpacity style={homeStyles.searchButton}>
                                <EvilIcons name="search" size={35} color="white" />
                            </TouchableOpacity>
                        </Link>

                        <Link href="/list" asChild>
                            <TouchableOpacity style={homeStyles.button}>
                                <Feather name="plus" size={22} color="#fff" />
                                <Text style={homeStyles.buttonTextMyList}>
                                    Minha Lista
                                </Text>
                            </TouchableOpacity>
                        </Link>

                        <Link href="/player" asChild>
                            <TouchableOpacity style={homeStyles.buttonPlay}>
                                <Text style={homeStyles.buttonPlayText}>
                                    Assistir
                                </Text>
                            </TouchableOpacity>
                        </Link>

                        <Link href="/anime" asChild>
                            <TouchableOpacity style={homeStyles.button}>
                                <Feather name="info" size={22} color="#fff" />
                                <Text style={homeStyles.buttonText}>Info</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}