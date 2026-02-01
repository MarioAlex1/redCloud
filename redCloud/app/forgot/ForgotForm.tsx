import { TextInput } from "react-native";
import { forgotStyles } from "../../src/styles/forgot.styles";

interface Props {
    email: string;
    onChangeEmail: (v: string) => void;
}

export default function ForgotForm({ email, onChangeEmail }: Props) {
    return (
        <TextInput
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Seu email"
            placeholderTextColor="#777"
            keyboardType="email-address"
            style={forgotStyles.input}
        />
    );
}