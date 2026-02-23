import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { makeChangePasswordStyles } from "../screens/ChangePasswordScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    message: string;
    onChangeCurrent: (v: string) => void;
    onChangeNew: (v: string) => void;
    onChangeConfirm: (v: string) => void;
}

// Campos de senha atual, nova senha e confirmação com visibilidade toggleável
export default function ChangePasswordForm({
    currentPassword,
    newPassword,
    confirmPassword,
    message,
    onChangeCurrent,
    onChangeNew,
    onChangeConfirm,
}: Props) {
    const { colors } = useTheme();
    const ChangePasswordStyles = useMemo(() => makeChangePasswordStyles(colors), [colors]);
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <View>
            <Text style={ChangePasswordStyles.label}>Senha atual</Text>
            <View style={[ChangePasswordStyles.input, { flexDirection: "row", alignItems: "center", padding: 0, paddingHorizontal: 12 }]}>
                <TextInput
                    secureTextEntry={!showCurrent}
                    value={currentPassword}
                    onChangeText={onChangeCurrent}
                    placeholder="Digite sua senha atual"
                    placeholderTextColor="gray"
                    style={{ flex: 1, color: colors.text, paddingVertical: 12 }}
                />
                <TouchableOpacity onPress={() => setShowCurrent(v => !v)}>
                    <MaterialIcons name={showCurrent ? "visibility-off" : "visibility"} size={22} color="gray" />
                </TouchableOpacity>
            </View>

            <Text style={ChangePasswordStyles.label}>Nova senha</Text>
            <View style={[ChangePasswordStyles.input, { flexDirection: "row", alignItems: "center", padding: 0, paddingHorizontal: 12 }]}>
                <TextInput
                    secureTextEntry={!showNew}
                    value={newPassword}
                    onChangeText={onChangeNew}
                    placeholder="Digite a nova senha"
                    placeholderTextColor="gray"
                    style={{ flex: 1, color: colors.text, paddingVertical: 12 }}
                />
                <TouchableOpacity onPress={() => setShowNew(v => !v)}>
                    <MaterialIcons name={showNew ? "visibility-off" : "visibility"} size={22} color="gray" />
                </TouchableOpacity>
            </View>

            <Text style={ChangePasswordStyles.label}>
                Confirmar nova senha
            </Text>
            <View style={[ChangePasswordStyles.input, { flexDirection: "row", alignItems: "center", padding: 0, paddingHorizontal: 12 }]}>
                <TextInput
                    secureTextEntry={!showConfirm}
                    value={confirmPassword}
                    onChangeText={onChangeConfirm}
                    placeholder="Repita a nova senha"
                    placeholderTextColor="gray"
                    style={{ flex: 1, color: colors.text, paddingVertical: 12 }}
                />
                <TouchableOpacity onPress={() => setShowConfirm(v => !v)}>
                    <MaterialIcons name={showConfirm ? "visibility-off" : "visibility"} size={22} color="gray" />
                </TouchableOpacity>
            </View>

            {message !== "" && (
                <Text style={ChangePasswordStyles.message}>
                    {message}
                </Text>
            )}
        </View>
    );
}