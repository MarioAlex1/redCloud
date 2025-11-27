import React, { useState } from "react";
import { ImageBackground, View, TextInput, TouchableOpacity, Text, Pressable } from "react-native";
import { registerStyles } from "../styles/registerStyles";
import Checkbox from "expo-checkbox"; //o botão de lembre-me
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RegisterPage() {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <ImageBackground
                source={require("../assets/images/fundoLoginRegister.png")}
                style={registerStyles.background}
                resizeMode="cover"
            >

                <View style={registerStyles.topCard}>

                    <Text style={registerStyles.tittle}>
                        Registre-se
                    </Text>

                    <Text style={registerStyles.subtittle}>
                        Crie sua conta
                    </Text>

                    <TextInput
                        placeholder="Email ou nome de usuário"
                        placeholderTextColor="#777"
                        style={registerStyles.input}
                    />

                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#777"
                        secureTextEntry
                        style={registerStyles.input}
                    />

                    <TextInput
                        placeholder="Confirmar Senha"
                        placeholderTextColor="#777"
                        secureTextEntry
                        style={registerStyles.input}
                    />

                    <View style={registerStyles.checkboxRow}>
                        <Checkbox
                            value={checked}
                            onValueChange={setChecked}
                            color={checked ? "#000" : undefined}
                            style={registerStyles.checkbox}
                        />

                        <Text style={registerStyles.checkboxLabel}>Lembrar-me</Text>
                    </View>

                    <TouchableOpacity style={registerStyles.buttonCreate}>
                        <Text style={registerStyles.buttonText}>Criar Conta</Text>
                    </TouchableOpacity>

                    <Text style={registerStyles.menseger}>
                        Já tem uma conta? Faça login aqui
                    </Text>

                    <Text style={registerStyles.mensegerContinue}>
                        Ou continue com
                    </Text>

                    <View style={registerStyles.socialButtons}>
                        <TouchableOpacity style={registerStyles.socialButton}>
                            <FontAwesome5 name="facebook" size={50} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={registerStyles.socialButton}>
                            <AntDesign name="google" size={50} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>
        </>
    );
}