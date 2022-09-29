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
    keyboardType ?: "default" | "numeric" | "email-address" | "user"
    onChangeText : (text : string) => void
    value?: string
    validate? : () => boolean
    maxLength? : number
}

const Input: React.FC<IInput> = ({style, isPassword, placeholder, icon, iconSize, onChangeText, value, validate, keyboardType, maxLength}) => {
    const [textVisible, setTextVisible] = useState(false);

    const toggleTextVisible = () => setTextVisible(!textVisible)


    return (
        <View>
        { icon && <MaterialIcons name={icon} size={ iconSize || 24} style={{marginRight : 4}}/>}
        <TextInput
            secureTextEntry={isPassword && !textVisible || false}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType || "default"}
            placeholderTextColor={colors.gray}
            maxLength={maxLength}
        />
        { isPassword &&
        
            <Pressable onPress={toggleTextVisible}>
                <MaterialIcons 
                    name={textVisible ? 'visibility' : 'visibility-off'} 
                    size={ iconSize || 24}
                />
            </Pressable>
        }
    </View>
    )
}

export default Input;