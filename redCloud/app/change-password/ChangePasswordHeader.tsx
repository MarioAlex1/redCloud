import { Text } from "react-native";
import { ChangePasswordStyles } from "../../src/styles/change-password.styles";

export default function ChangePasswordHeader() {
    return (
        <Text style={ChangePasswordStyles.title}>
            Mudar Senha
        </Text>
    );
}