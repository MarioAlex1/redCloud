import { TouchableOpacity, Text } from "react-native";
import { UserStyles } from "../../src/styles/user.styles";

export default function UserLogout() {
    return (
        <TouchableOpacity style={UserStyles.logoutButton}>
            <Text style={UserStyles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
    );
}