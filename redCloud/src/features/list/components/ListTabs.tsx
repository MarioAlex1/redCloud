import { View, Text, TouchableOpacity } from "react-native";
import { makeListStyles } from "../screens/ListScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { ListTab } from "../screens/ListScreen";

interface Props {
    activeTab: ListTab;
    onChange: (tab: ListTab) => void;
}

export default function ListTabs({ activeTab, onChange }: Props) {
    const { colors } = useTheme();
    const ListStyles = useMemo(() => makeListStyles(colors), [colors]);
    return (
        <View style={ListStyles.optionsRow}>
            <TabButton
                label="Assistidos"
                active={activeTab === "assistidos"}
                onPress={() => onChange("assistidos")}
                styles={ListStyles}
            />

            <TabButton
                label="Não Assistidos"
                active={activeTab === "naoAssistidos"}
                onPress={() => onChange("naoAssistidos")}
                styles={ListStyles}
            />

            <TabButton
                label="Downloads"
                active={activeTab === "downloads"}
                onPress={() => onChange("downloads")}
                styles={ListStyles}
            />
        </View>
    );
}

function TabButton({
    label,
    active,
    onPress,
    styles,
}: {
    label: string;
    active: boolean;
    onPress: () => void;
    styles: ReturnType<typeof makeListStyles>;
}) {
    return (
        <TouchableOpacity
            style={[
                styles.optionButton,
                active && styles.activeOption,
            ]}
            onPress={onPress}
        >
            <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
    );
}