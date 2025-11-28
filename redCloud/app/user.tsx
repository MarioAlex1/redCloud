import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { UserStyles } from "../styles/userStyles";
import { Feather } from '@expo/vector-icons';
import { Link, usePathname, Stack } from 'expo-router';

export default function User() {
    const pathname = usePathname();

    const [audio, setAudio] = useState("Português");
    const [subtitle, setSubtitle] = useState("N/A");

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

                    {/* Título */}
                    <Text style={UserStyles.title}>Perfil</Text>

                    {/* Foto */}
                    <View style={UserStyles.profilePicContainer}>
                        <Image
                            source={require("../assets/images/perfiltemp.png")}
                            style={UserStyles.profilePic}
                        />
                    </View>

                    {/* Container 1 */}
                    <View style={UserStyles.container}>
                        <Link href="/plan" asChild>
                            <TouchableOpacity style={UserStyles.optionRow}>
                                <Text style={UserStyles.optionText}>Plano de membro</Text>
                                <Feather name="chevron-right" size={20} color="gray" />
                            </TouchableOpacity>
                        </Link>

                        <Link href="/change-email" asChild>
                            <TouchableOpacity style={UserStyles.optionRow}>
                                <Text style={UserStyles.optionText}>Mudar email</Text>
                                <Feather name="chevron-right" size={20} color="gray" />
                            </TouchableOpacity>
                        </Link>

                        <Link href="/change-password" asChild>
                        <TouchableOpacity style={UserStyles.optionRow}>
                            <Text style={UserStyles.optionText}>Mudar senha</Text>
                            <Feather name="chevron-right" size={20} color="gray" />
                        </TouchableOpacity>
                        </Link>
                    </View>

                    {/* Container 2 */}
                    <View style={UserStyles.container}>
                        <TouchableOpacity
                            style={UserStyles.optionRow}
                            onPress={() => {
                                const nextAudio = audio === "Português" ? "Inglês" : "Português";
                                setAudio(nextAudio);
                            }}
                        >
                            <Text style={UserStyles.optionText}>Áudio: {audio}</Text>
                            <Feather name="chevron-right" size={20} color="gray" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={UserStyles.optionRow}
                            onPress={() => {
                                const nextSubtitle = subtitle === "N/A" ? "Português" : "N/A";
                                setSubtitle(nextSubtitle);
                            }}
                        >
                            <Text style={UserStyles.optionText}>Legenda: {subtitle}</Text>
                            <Feather name="chevron-right" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>

                    {/* Botão Sair */}
                    <TouchableOpacity style={UserStyles.logoutButton}>
                        <Text style={UserStyles.logoutButtonText}>Sair</Text>
                    </TouchableOpacity>

                </ScrollView>

                {/* Footer */}
                <View style={UserStyles.footer}>
                    <Link href="/home" asChild>
                        <TouchableOpacity style={UserStyles.footerButton}>
                            <Feather
                                name="home"
                                size={24}
                                color={pathname === "/home" ? "#e50914" : "#fff"}
                            />
                        </TouchableOpacity>
                    </Link>

                    <Link href="/list" asChild>
                        <TouchableOpacity style={UserStyles.footerButton}>
                            <Feather
                                name="list"
                                size={24}
                                color={pathname === "/list" ? "#e50914" : "#fff"}
                            />
                        </TouchableOpacity>
                    </Link>

                    <Link href="/user" asChild>
                        <TouchableOpacity style={UserStyles.footerButton}>
                            <Feather
                                name="user"
                                size={24}
                                color={pathname === "/user" ? "#e50914" : "#fff"}
                            />
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </>
    );
}