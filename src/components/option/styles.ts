import { colors } from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    primaryTitle: {
        color : colors.green[300],
        
    },
    secondaryTitle : {
        color: colors.gray[400],
        fontSize: 16

    }

})