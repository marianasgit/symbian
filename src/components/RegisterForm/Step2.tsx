import { useEffect, useRef, useState } from "react"
import { View, Text, Animated, Easing } from "react-native"
import Input from '../Input'

export interface IRegisterFormProps {
    styles: any,
    formData: any
    onChange: (value: string, key: any) => void
}

const Step2: React.FC<IRegisterFormProps> = ({ styles, formData, onChange }) => {

    return (
        <Animated.View >
            <Input style={styles.input} placeholder="Nome do contato de emergência" icon="contacts" onChangeText={(text: string) => onChange(text, "email")} keyboardType="email-address"></Input>

            <Input style={styles.input} placeholder="Telefone do contato de emergência" icon="phone-android" onChangeText={(text: string) => onChange(text, "github")} keyboardType="user" ></Input>
        
            <Input isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => onChange(text, "password")}></Input>
        </Animated.View>
    )

}

export default Step2;