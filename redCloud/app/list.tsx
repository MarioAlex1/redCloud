import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Feather, EvilIcons } from '@expo/vector-icons';
import { ListStyles } from '../styles/listStyles';
import { Link, usePathname, Stack } from 'expo-router';

export default function listPage() {
    const pathname = usePathname();
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: '#000' }}>
                {/* Header */}
                <View style={ListStyles.header}>
                    <Text style={ListStyles.title}>Minha Lista</Text>

                    <TouchableOpacity onPress={() => setSearchOpen(!searchOpen)}>
                        <EvilIcons name="search" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Barra de pesquisa */}
                {searchOpen && (
                    <View style={ListStyles.searchBar}>
                        <TextInput
                            placeholder="Pesquisar na lista..."
                            placeholderTextColor="#aaa"
                            style={ListStyles.searchInput}
                        />
                    </View>
                )}

                {/* Opções Assistidos / Não Assistidos / Downloads */}
                <View style={ListStyles.optionsRow}>
                    <TouchableOpacity style={[ListStyles.optionButton, ListStyles.activeOption]}>
                        <Text style={ListStyles.optionText}>Assistidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ListStyles.optionButton]}>
                        <Text style={ListStyles.optionText}>Não Assistidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ListStyles.optionButton}>
                        <Text style={ListStyles.optionText}>Downloads</Text>
                    </TouchableOpacity>
                </View>

                {/* Conteúdo Assistidos */}
                <ScrollView contentContainerStyle={ListStyles.listContainer}>
                    <View style={ListStyles.emptyContainer}>
                        <Image
                            source={require('../assets/images/nadaAqui.png')} 
                            style={ListStyles.emptyImage}
                        />
                        <Text style={ListStyles.emptyTitle}>Opa... Nada aqui...</Text>
                        <Text style={ListStyles.emptySubtitle}>Vamos adicionar algo</Text>
                        <Link href="/home" asChild>
                            <TouchableOpacity style={ListStyles.addButton}>
                                <Text style={ListStyles.addButtonText}>Procurar</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </ScrollView>

                {/* Footer */}
                <View style={ListStyles.footer}>
                    <Link href="/home" asChild>
                        <TouchableOpacity style={ListStyles.footerButton}>
                            <Feather
                                name="home"
                                size={24}
                                color={pathname === "/home" ? "#e50914" : "#fff"}
                            />
                        </TouchableOpacity>
                    </Link>

                    <Link href="/list" asChild>
                        <TouchableOpacity style={ListStyles.footerButton}>
                            <Feather
                                name="list"
                                size={24}
                                color={pathname === "/list" ? "#e50914" : "#fff"}
                            />
                        </TouchableOpacity>
                    </Link>

                    <Link href="/user" asChild>
                        <TouchableOpacity style={ListStyles.footerButton}>
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