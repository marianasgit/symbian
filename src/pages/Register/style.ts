import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const styles = StyleSheet.create({
    containerRegister : {
        backgroundColor : colors.white,
        width: '100%',
        height: '100%',
        display: 'flex',
       
    },

    signUp: {
        color: colors.white,
        fontSize: 32,
        marginBottom: 40
    },

    input: {
        width: 256,
        marginBottom:40,
    },

    containerRegisterForm:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
    }
})

export default styles;