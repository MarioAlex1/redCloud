import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

import ChangeEmailHeader from "./ChangeEmailHeader";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangeEmailActions from "./ChangeEmailActions";

export default function ChangeEmailPage() {
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

            <View style={{ flex: 1, backgroundColor: "#000" }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <ChangeEmailHeader />

                    <ChangeEmailForm
                        currentEmail={currentEmail}
                        newEmail={newEmail}
                        message={message}
                        onChangeCurrent={setCurrentEmail}
                        onChangeNew={setNewEmail}
                    />

                    <ChangeEmailActions onSave={handleChange} />
                </ScrollView>
            </View>
        </>
    );
}