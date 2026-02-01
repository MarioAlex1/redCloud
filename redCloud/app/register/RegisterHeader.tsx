import { Text } from "react-native";
import { registerStyles } from "../../src/styles/register.styles";

export default function RegisterHeader() {
    return (
        <>
            <Text style={registerStyles.tittle}>Registre-se</Text>
            <Text style={registerStyles.subtittle}>Crie sua conta</Text>
        </>
    );
}