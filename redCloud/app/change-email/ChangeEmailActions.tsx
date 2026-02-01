import { TouchableOpacity, Text } from "react-native";
import { ChangeEmailStyles } from "../../src/styles/change-email.styles";

export default function ChangeEmailActions({
    onSave,
}: {
    onSave: () => void;
}) {
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