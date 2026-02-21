import { TouchableOpacity, Text } from "react-native";
import { makeChangePasswordStyles } from "../screens/ChangePasswordScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function ChangePasswordActions({
    onSave,
}: {
    onSave: () => void;
}) {
    const { colors } = useTheme();
    const ChangePasswordStyles = useMemo(() => makeChangePasswordStyles(colors), [colors]);
    return (
        <TouchableOpacity
            onPress={onSave}
            style={ChangePasswordStyles.saveButton}
        >
            <Text style={ChangePasswordStyles.saveButtonText}>
                Salvar
            </Text>
        </TouchableOpacity>
    );
}