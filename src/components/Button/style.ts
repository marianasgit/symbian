import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const buttonStyles = StyleSheet.create({
    button: {
        width : 200,
        height : 48,
        margin : 16,
        borderColor: colors.deepBlue,
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor: colors.deepBlue
    },

    text : {
        color : colors.background,
        textTransform: "uppercase",
        fontSize: 20
    },
})

export default buttonStyles;