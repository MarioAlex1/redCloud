import { View, Text, TextInput } from "react-native";
import { ChangePasswordStyles } from "../../src/styles/change-password.styles";

interface Props {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    message: string;
    onChangeCurrent: (v: string) => void;
    onChangeNew: (v: string) => void;
    onChangeConfirm: (v: string) => void;
}

export default function ChangePasswordForm({
    currentPassword,
    newPassword,
    confirmPassword,
    message,
    onChangeCurrent,
    onChangeNew,
    onChangeConfirm,
}: Props) {
    return (
        <View>
            <Text style={ChangePasswordStyles.label}>Senha atual</Text>
            <TextInput
                secureTextEntry
                value={currentPassword}
                onChangeText={onChangeCurrent}
                placeholder="Digite sua senha atual"
                placeholderTextColor="gray"
                style={ChangePasswordStyles.input}
            />

            <Text style={ChangePasswordStyles.label}>Nova senha</Text>
            <TextInput
                secureTextEntry
                value={newPassword}
                onChangeText={onChangeNew}
                placeholder="Digite a nova senha"
                placeholderTextColor="gray"
                style={ChangePasswordStyles.input}
            />

            <Text style={ChangePasswordStyles.label}>
                Confirmar nova senha
            </Text>
            <TextInput
                secureTextEntry
                value={confirmPassword}
                onChangeText={onChangeConfirm}
                placeholder="Repita a nova senha"
                placeholderTextColor="gray"
                style={ChangePasswordStyles.input}
            />

            {message !== "" && (
                <Text style={ChangePasswordStyles.message}>
                    {message}
                </Text>
            )}
        </View>
    );
}