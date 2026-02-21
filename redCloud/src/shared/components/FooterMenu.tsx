import { View, TouchableOpacity, Text } from "react-native";
import { Link, usePathname } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { makeMenuFooter } from "./FooterMenu.styles";
import { useTheme } from "../../theme/ThemeContext";
import { useMemo } from "react";

type IconName = React.ComponentProps<typeof MaterialIcons>["name"];

const TABS: { href: string; icon: IconName; label: string }[] = [
    { href: "/home",  icon: "home",            label: "Início" },
    { href: "/list",  icon: "bookmark",        label: "Minha Lista" },
    { href: "/user",  icon: "account-circle",  label: "Perfil" },
];

export default function UserFooter() {
    const { colors } = useTheme();
    const menuFooter = useMemo(() => makeMenuFooter(colors), [colors]);
    const pathname = usePathname();

    return (
        <View style={menuFooter.footer}>
            {TABS.map(({ href, icon, label }) => {
                const active = pathname === href;
                const iconColor = active ? "#fff" : "rgba(255,255,255,0.45)";

                return (
                    <Link key={href} href={href} asChild>
                        <TouchableOpacity style={menuFooter.footerButton}>
                            <View style={[menuFooter.iconWrapper, active && menuFooter.activeShadow]}>
                                <MaterialIcons name={icon} size={24} color={iconColor} />
                            </View>
                            <Text style={[menuFooter.tabLabel, { color: iconColor }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    </Link>
                );
            })}
        </View>
    );
}