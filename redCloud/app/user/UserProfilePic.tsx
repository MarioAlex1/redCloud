import { View, Image } from "react-native";
import { UserStyles } from "../../src/styles/user.styles";

export default function UserProfilePic() {
    return (
        <View style={UserStyles.profilePicContainer}>
            <Image
                source={require("../../assets/images/perfiltemp.png")}
                style={UserStyles.profilePic}
            />
        </View>
    );
}