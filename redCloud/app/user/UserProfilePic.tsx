import { View, Image } from "react-native";
import { makeUserStyles } from "../../src/styles/user.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function UserProfilePic() {
    const { colors } = useTheme();
    const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
    return (
        <View style={UserStyles.profilePicContainer}>
            <Image
                source={require("../../src/assets/images/perfiltemp.png")}
                style={UserStyles.profilePic}
            />
        </View>
    );
}