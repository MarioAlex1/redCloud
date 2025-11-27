import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from "react-native";
import { homeStyles } from "../styles/homeStyles";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router"; // o segundo é pra efeito ativo

export default function homePage() {
    const pathname = usePathname(); //serve pra pegar a rota atual

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={homeStyles.screen}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <View style={homeStyles.ImageContainer}>
                    <ImageBackground
                        source={require("../assets/images/atackOnTitan.png")}
                        style={homeStyles.titanImage}
                        resizeMode="cover"
                    >
                        <View style={homeStyles.overlay}>

                            <View style={homeStyles.buttonsRow}>

                                <TouchableOpacity style={homeStyles.button}>
                                    <Feather name="plus" size={22} color="#fff" />
                                    <Text style={homeStyles.buttonTextMyList}>Minha Lista</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={homeStyles.buttonPlay}>
                                    <Text style={homeStyles.buttonPlayText}>Assistir</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={homeStyles.button}>
                                    <Feather name="info" size={22} color="#fff" />
                                    <Text style={homeStyles.buttonText}>Info</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={homeStyles.section}>
                    <Text style={homeStyles.sectionTitle}>Populares</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={homeStyles.cardRow}
                    >
                        <Image source={require("../assets/images/jujutsu.png")} style={homeStyles.card} />
                        <Image source={require("../assets/images/gachiakuta.png")} style={homeStyles.card} />
                        <Image source={require("../assets/images/fragrantFlower.png")} style={homeStyles.card} />
                    </ScrollView>
                </View>

                <View style={homeStyles.section}>
                    <Text style={homeStyles.sectionTitle}>Top 10</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={homeStyles.cardRow}
                    >
                        <Image source={require("../assets/images/jujutsu.png")} style={homeStyles.card} />
                        <Image source={require("../assets/images/gachiakuta.png")} style={homeStyles.card} />
                        <Image source={require("../assets/images/fragrantFlower.png")} style={homeStyles.card} />
                    </ScrollView>
                </View>
            </ScrollView>

            <Link href="/search" asChild>
                <TouchableOpacity style={homeStyles.searchButton}>
                    <EvilIcons name="search" size={35} color="white" />
                </TouchableOpacity>
            </Link>

            <View style={homeStyles.footer}>
                <Link href="/home" asChild>
                    <TouchableOpacity style={homeStyles.footerButton}>
                        <Feather
                            name="home"
                            size={24}
                            color={pathname === "/home" ? "#e50914" : "#fff"}
                        />
                    </TouchableOpacity>
                </Link>

                <Link href="/list" asChild>
                    <TouchableOpacity style={homeStyles.footerButton}>
                        <Feather
                            name="list"
                            size={24}
                            color={pathname === "/list" ? "#e50914" : "#fff"}
                        />
                    </TouchableOpacity>
                </Link>

                <Link href="/user" asChild>
                    <TouchableOpacity style={homeStyles.footerButton}>
                        <Feather
                            name="user"
                            size={24}
                            color={pathname === "/user" ? "#e50914" : "#fff"}
                        />
                    </TouchableOpacity>
                </Link>

            </View>
        </View>
    );
}