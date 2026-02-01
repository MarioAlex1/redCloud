import { TouchableOpacity, Text } from "react-native";
import { ChangePasswordStyles } from "../../src/styles/change-password.styles";

export default function ChangePasswordActions({
    onSave,
}: {
    onSave: () => void;
}) {
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