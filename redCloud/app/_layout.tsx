import { Stack } from "expo-router";
import { ThemeProvider } from "../src/theme/ThemeContext";

export default function Layout() {
    return (
        <ThemeProvider>
            <Stack
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerTintColor: "#ffff",
                }}
            />
        </ThemeProvider>
    );
}