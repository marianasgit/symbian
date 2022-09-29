import { Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Children, useState } from "react";
import buttonStyles from "./style";


interface IButtonProps {
    onPress : () => void,
    style? : any,
    pressedStyle? : any,
    textStyle? : object | object[],
    text? : string,
}

const Button : React.FC<IButtonProps> = ({ onPress, style, text, textStyle, pressedStyle}) => {
    
    const [isPressed, setPressed] = useState(false)

    return (
        <TouchableOpacity
            activeOpacity={.75}
            onPress={onPress}
            style={style || buttonStyles}>
            <View>
                <Text style={[buttonStyles.text, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;