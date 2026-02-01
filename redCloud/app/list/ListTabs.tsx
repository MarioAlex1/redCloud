import { View, Text, TouchableOpacity } from "react-native";
import { ListStyles } from "../../src/styles/list.styles";
import { ListTab } from "./index";

interface Props {
    activeTab: ListTab;
    onChange: (tab: ListTab) => void;
}

export default function ListTabs({ activeTab, onChange }: Props) {
    return (
        <View style={ListStyles.optionsRow}>
            <TabButton
                label="Assistidos"
                active={activeTab === "assistidos"}
                onPress={() => onChange("assistidos")}
            />

            <TabButton
                label="Não Assistidos"
                active={activeTab === "naoAssistidos"}
                onPress={() => onChange("naoAssistidos")}
            />

            <TabButton
                label="Downloads"
                active={activeTab === "downloads"}
                onPress={() => onChange("downloads")}
            />
        </View>
    );
}

function TabButton({
    label,
    active,
    onPress,
}: {
    label: string;
    active: boolean;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            style={[
                ListStyles.optionButton,
                active && ListStyles.activeOption,
            ]}
            onPress={onPress}
        >
            <Text style={ListStyles.optionText}>{label}</Text>
        </TouchableOpacity>
    );
}