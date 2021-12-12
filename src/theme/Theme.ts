import { configureFonts, DefaultTheme } from "react-native-paper";
import customFonts from "./Fonts";

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(customFonts),
    roundness: 30,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4169E1",
        accent: "#f1c4àf",
        favorite: "#BADA55",
        cancelButton: "#a4c639",
        iconColor: "#000000",
    }
}

export default theme;