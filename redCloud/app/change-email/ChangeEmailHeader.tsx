import { Text } from "react-native";
import { ChangeEmailStyles } from "../../src/styles/change-email.styles";

export default function ChangeEmailHeader() {
    return (
        <Text style={ChangeEmailStyles.title}>
            Mudar Email
        </Text>
    );
}