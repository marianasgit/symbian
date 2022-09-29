import { StyleSheet } from "react-native";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

const styles = StyleSheet.create({
    containerRegister : {
        backgroundColor : colors.background,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: "center"
    },

    image: {
        marginTop: 32,
    },

    intro: {
        width: '80%',
        alignItems: "flex-start",
        marginBottom: 16
    },

    title: {
        fontFamily: fonts.bellefair,
        fontSize: 32,
        color: colors.background,
    },

    text: {
        fontFamily: fonts.bellefair,
        fontSize: 20,
        color: colors.background,
    },

    containerRegisterForm:{
        width: '100%',
        height: '60%',
        backgroundColor: colors.red,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 80,
        borderRadius: 32,
        
    }
})

export default styles;