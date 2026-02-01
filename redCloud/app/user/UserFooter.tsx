import { View, TouchableOpacity } from "react-native";
import { Link, usePathname } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { UserStyles } from "../../src/styles/user.styles";

export default function UserFooter() {
    const pathname = usePathname();

    const color = (path: string) =>
        pathname === path ? "#e50914" : "#fff";

    return (
        <View style={UserStyles.footer}>
            <Link href="/home" asChild>
                <TouchableOpacity style={UserStyles.footerButton}>
                    <Feather name="home" size={24} color={color("/home")} />
                </TouchableOpacity>
            </Link>

            <Link href="/list" asChild>
                <TouchableOpacity style={UserStyles.footerButton}>
                    <Feather name="list" size={24} color={color("/list")} />
                </TouchableOpacity>
            </Link>

            <Link href="/user" asChild>
                <TouchableOpacity style={UserStyles.footerButton}>
                    <Feather name="user" size={24} color={color("/user")} />
                </TouchableOpacity>
            </Link>
        </View>
    );
}