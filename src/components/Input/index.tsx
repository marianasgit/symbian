import { useState } from 'react';
import {View, TextInput, Pressable, Touchable, Image} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./style";
import colors from '../../style/colors';

interface IInput {
    placeholder? : string
    isPassword? : boolean
    style? : any
    icon? : keyof typeof MaterialIcons.glyphMap
    iconSize? : number
    //keyboardType ?: "default" | "numeric" | "email-address" | "user"
    onChangeText : (text : string) => void
    value?: string
    validate? : () => boolean
    maxLength? : number
}

const Input: React.FC<IInput> = ({style, isPassword, placeholder, icon, iconSize, onChangeText, value, validate}) => {
    const [textVisible, setTextVisible] = useState(false);

    const toggleTextVisible = () => setTextVisible(!textVisible)


    return (
        <View style={styles.container}>
        { icon && <MaterialIcons name={icon} size={ iconSize || 24} style={styles.icon}/>}
        <TextInput
            secureTextEntry={isPassword && !textVisible || false}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            //keyboardType={keyboardType || "default"}
            placeholderTextColor={colors.gray}
        />
        { isPassword &&
        
            <Pressable onPress={toggleTextVisible}>
                <MaterialIcons 
                    name={textVisible ? 'visibility' : 'visibility-off'} 
                    style={styles.icon}
                />
            </Pressable>
        }
    </View>
    )
}

export default Input;