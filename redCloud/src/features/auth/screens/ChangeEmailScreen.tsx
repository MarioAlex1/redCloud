import { View } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "../../../theme/ThemeContext";
import { useState, useMemo } from "react";
import { makeChangeEmailStyles } from "./ChangeEmailScreen.styles";

import ChangeEmailHeader from "../components/ChangeEmailHeader";
import ChangeEmailForm from "../components/ChangeEmailForm";
import ChangeEmailActions from "../components/ChangeEmailActions";

export default function ChangeEmailPage() {
    const { colors } = useTheme();
    const styles = useMemo(() => makeChangeEmailStyles(colors), [colors]);
    const [currentEmail, setCurrentEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = () => {
        if (!currentEmail || !newEmail) {
            setMessage("Preencha todos os campos.");
            return;
        }

        if (!newEmail.includes("@") || !newEmail.includes(".")) {
            setMessage("Digite um email válido.");
            return;
        }

        setMessage("Email atualizado com sucesso!");
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.container}>
                <View style={styles.card}>
                    <ChangeEmailHeader />

                    <ChangeEmailForm
                        currentEmail={currentEmail}
                        newEmail={newEmail}
                        message={message}
                        onChangeCurrent={setCurrentEmail}
                        onChangeNew={setNewEmail}
                    />

                    <ChangeEmailActions onSave={handleChange} />
                </View>
            </View>
        </>
    );
}
