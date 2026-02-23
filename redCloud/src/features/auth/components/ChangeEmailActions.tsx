import { View, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";
import { makeChangeEmailStyles } from "../screens/ChangeEmailScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Botão de salvar e link de voltar da tela de troca de email
export default function ChangeEmailActions({ onSave }: { onSave: () => void }) {
    const { colors } = useTheme();
    const s = useMemo(() => makeChangeEmailStyles(colors), [colors]);
    return (
        <>
            <TouchableOpacity onPress={onSave} style={s.saveButton}>
                <Text style={s.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <View style={s.bottomArea}>
                <Text style={s.bottomText}>Não quer alterar?</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={s.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
