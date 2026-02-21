import { View, TouchableOpacity } from "react-native";
import { Link, usePathname } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { menuFooter } from "../../src/styles/components.styles/menu.styles";

export default function UserFooter() {
    const pathname = usePathname();

    const color = (path: string) =>
        pathname === path ? "#e50914" : "#fff";

    return (
        <View style={menuFooter.footer}>
            <Link href="/home" asChild>
                <TouchableOpacity style={menuFooter.footerButton}>
                    <MaterialIcons name="home" size={24} color={color("/home")} />
                </TouchableOpacity>
            </Link>

            <Link href="/list" asChild>
                <TouchableOpacity style={menuFooter.footerButton}>
                    <MaterialIcons name="list" size={24} color={color("/list")} />
                </TouchableOpacity>
            </Link>

            <Link href="/user" asChild>
                <TouchableOpacity style={menuFooter.footerButton}>
                    <MaterialIcons name="account-circle" size={24} color={color("/user")} />
                </TouchableOpacity>
            </Link>
        </View>
    );
}