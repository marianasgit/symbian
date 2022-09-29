import { StyleSheet } from "react-native";

import colors from "../../style/colors"

const styles = StyleSheet.create({
    container : {
        width: 300,
        height : 40,
        backgroundColor : colors.background,
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 8,
        marginVertical: 8,
        borderRadius: 8,
    },

    input : {
        width: '100%',
        marginLeft: 8,
    },

    icon: {
        color: colors.red
    }
})    

export default styles;