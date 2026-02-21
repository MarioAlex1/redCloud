import { View, TouchableOpacity } from "react-native";
import { Link, usePathname } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { menuFooter } from "../../src/styles/components.styles/menu.styles";

export default function UserFooter() {
    const pathname = usePathname();

    // ícone permanece branco; o item ativo mostrará uma sombra/backdrop
    const color = (_path: string) => "#fff";

    return (
        <View style={menuFooter.footer}>
            <Link href="/home" asChild>
                <TouchableOpacity style={menuFooter.footerButton}>
                    <View style={[menuFooter.iconWrapper, pathname === "/home" && menuFooter.activeShadow]}>
                        <MaterialIcons name="home" size={24} color={color("/home")} />
                    </View>
                </TouchableOpacity>
            </Link>

            <Link href="/list" asChild>
                <TouchableOpacity style={menuFooter.footerButton}>
                    <View style={[menuFooter.iconWrapper, pathname === "/list" && menuFooter.activeShadow]}>
                        <MaterialIcons name="list" size={24} color={color("/list")} />
                    </View>
                </TouchableOpacity>
            </Link>

            <Link href="/user" asChild>
                <TouchableOpacity style={menuFooter.footerButton}>
                    <View style={[menuFooter.iconWrapper, pathname === "/user" && menuFooter.activeShadow]}>
                        <MaterialIcons name="account-circle" size={24} color={color("/user")} />
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    );
}