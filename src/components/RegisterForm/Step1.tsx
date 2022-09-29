import { useEffect, useRef, useState } from "react"
import { View, Text, Animated, Easing } from "react-native"
import { maskPhone, maskTelephone } from "../../masks"
import { isEmpty } from "../../validations"
import Input from '../Input'

export interface IRegisterFormProps {
    styles: any,
    formData: any
    onChange: (value: string, key: any) => void
}

const Step1: React.FC<IRegisterFormProps> = ({ styles, formData, onChange }) => {

    return (
        <Animated.View >
            <Input style={styles.input} placeholder="Nome" icon="person" onChangeText={(text: string) => onChange(text, "name")} validate={() => !isEmpty(formData.name)}></Input>

            <Input style={styles.input} placeholder="E-mail" icon="mail" onChangeText={(text: string) => onChange(text, "email")} validate={() => !isEmpty(formData.email)}></Input>

            <Input style={styles.input} placeholder="Telefone" icon="phone" onChangeText={(text: string) => onChange(text, "telephone")} value={maskTelephone(formData.telephone)} maxLength={13}></Input>
        
            <Input style={styles.input} placeholder="Celular" icon="phone-android" onChangeText={(text: string) => onChange(text, "phone")} value={maskPhone(formData.phone)} maxLength={11}></Input>
        </Animated.View>
    )
}
export default Step1;  