import { View, Text, TextInput } from "react-native";
import { makeChangeEmailStyles } from "../screens/ChangeEmailScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

interface Props {
    currentEmail: string;
    newEmail: string;
    message: string;
    onChangeCurrent: (v: string) => void;
    onChangeNew: (v: string) => void;
}

// Campos de email atual e novo email com mensagem de feedback
export default function ChangeEmailForm({
    currentEmail,
    newEmail,
    message,
    onChangeCurrent,
    onChangeNew,
}: Props) {
    const { colors } = useTheme();
    const ChangeEmailStyles = useMemo(() => makeChangeEmailStyles(colors), [colors]);
    return (
        <View>
            <Text style={ChangeEmailStyles.label}>Email atual</Text>
            <TextInput
                value={currentEmail}
                onChangeText={onChangeCurrent}
                placeholder="Digite seu email atual"
                placeholderTextColor="gray"
                style={ChangeEmailStyles.input}
            />

            <Text style={ChangeEmailStyles.label}>Novo email</Text>
            <TextInput
                value={newEmail}
                onChangeText={onChangeNew}
                placeholder="Digite o novo email"
                placeholderTextColor="gray"
                style={ChangeEmailStyles.input}
            />

            {message !== "" && (
                <Text style={ChangeEmailStyles.message}>
                    {message}
                </Text>
            )}
        </View>
    );
}