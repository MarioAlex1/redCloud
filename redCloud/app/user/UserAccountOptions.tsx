import { View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { UserStyles } from "../../src/styles/user.styles";

export default function UserAccountOptions() {
    return (
        <View style={UserStyles.container}>
            <Option href="/plan" label="Plano de membro" />
            <Option href="/change-email" label="Mudar email" />
            <Option href="/change-password" label="Mudar senha" />
        </View>
    );
}

function Option({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={UserStyles.optionRow}>
                <Text style={UserStyles.optionText}>{label}</Text>
                <Feather name="chevron-right" size={20} color="gray" />
            </TouchableOpacity>
        </Link>
    );
}