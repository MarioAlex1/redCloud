import { Text } from "react-native";
import { loginStyles } from "../../src/styles/login.styles";

export default function LoginHeader() {
    return (
        <>
            <Text style={loginStyles.tittle}>Bem-vindo de volta!</Text>
            <Text style={loginStyles.subtittle}>Entre com sua conta</Text>
        </>
    );
}