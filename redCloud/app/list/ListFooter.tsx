import { View, TouchableOpacity } from "react-native";
import { Link, usePathname } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { ListStyles } from "../../src/styles/list.styles";

export default function ListFooter() {
    const pathname = usePathname();

    const color = (path: string) =>
        pathname === path ? "#e50914" : "#fff";

    return (
        <View style={ListStyles.footer}>
            <Link href="/home" asChild>
                <TouchableOpacity style={ListStyles.footerButton}>
                    <Feather name="home" size={24} color={color("/home")} />
                </TouchableOpacity>
            </Link>

            <Link href="/list" asChild>
                <TouchableOpacity style={ListStyles.footerButton}>
                    <Feather name="list" size={24} color={color("/list")} />
                </TouchableOpacity>
            </Link>

            <Link href="/user" asChild>
                <TouchableOpacity style={ListStyles.footerButton}>
                    <Feather name="user" size={24} color={color("/user")} />
                </TouchableOpacity>
            </Link>
        </View>
    );
}