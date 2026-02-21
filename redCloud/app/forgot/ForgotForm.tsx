import { TextInput } from "react-native";
import { makeForgotStyles } from "../../src/styles/forgot.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

interface Props {
    email: string;
    onChangeEmail: (v: string) => void;
}

export default function ForgotForm({ email, onChangeEmail }: Props) {
    const { colors } = useTheme();
    const forgotStyles = useMemo(() => makeForgotStyles(colors), [colors]);
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