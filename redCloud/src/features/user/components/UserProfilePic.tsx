import { View, Image, Text } from "react-native";
import { makeUserStyles } from "../screens/UserScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function UserProfilePic({ nick }: { nick: string }) {
    const { colors } = useTheme();
    const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
    return (
        <View style={UserStyles.profilePicContainer}>
            <Image
                source={require("../../../assets/images/perfiltemp.png")}
                style={UserStyles.profilePic}
            />
            <Text style={UserStyles.nicknameText}>{nick || 'Usuário'}</Text>
        </View>
    );
}