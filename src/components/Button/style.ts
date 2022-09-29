import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const buttonStyles = StyleSheet.create({
    button: {
        width : 200,
        height : 40,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: colors.deepBlue,
        borderRadius: 8,
        marginTop: 16,
    },

    text : {
        color : colors.background,
        textTransform: "uppercase",
        fontSize: 20
    },
})

export default buttonStyles;