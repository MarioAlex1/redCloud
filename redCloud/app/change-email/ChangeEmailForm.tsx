import { View, Text, TextInput } from "react-native";
import { ChangeEmailStyles } from "../../src/styles/change-email.styles";

interface Props {
    currentEmail: string;
    newEmail: string;
    message: string;
    onChangeCurrent: (v: string) => void;
    onChangeNew: (v: string) => void;
}

export default function ChangeEmailForm({
    currentEmail,
    newEmail,
    message,
    onChangeCurrent,
    onChangeNew,
}: Props) {
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