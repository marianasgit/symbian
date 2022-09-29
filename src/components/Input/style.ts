import { StyleSheet } from "react-native";

import colors from "../../style/colors"

const styles = StyleSheet.create({
    container : {
        height : 48,
        paddingHorizontal : 12,
        marginVertical : 8,
        marginHorizontal : 8,

        backgroundColor : colors.background,

        borderWidth : 2,
        borderColor : colors.background,
        borderRadius : 12,

        flexDirection : "row",
        alignItems: 'center'
    },

    input : {
        flex: 1,
        paddingHorizontal : 4,
        textVerticalAlign: 'center',
        alignItems: 'center',

        icon : {
            color: colors.red
        }
    }
})    

export default styles;