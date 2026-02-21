import { TouchableOpacity, Text } from "react-native";
import { makeChangeEmailStyles } from "../../src/styles/change-email.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function ChangeEmailActions({
    onSave,
}: {
    onSave: () => void;
}) {
    const { colors } = useTheme();
    const ChangeEmailStyles = useMemo(() => makeChangeEmailStyles(colors), [colors]);
    return (
        <TouchableOpacity
            onPress={onSave}
            style={ChangeEmailStyles.saveButton}
        >
            <Text style={ChangeEmailStyles.saveButtonText}>
                Salvar
            </Text>
        </TouchableOpacity>
    );
}