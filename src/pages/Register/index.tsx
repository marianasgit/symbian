import { Text, View } from "react-native"
import styles from "./style";
import Button from "../../components/Button";
import Step1 from "../../components/RegisterForm/Step1";
import Step2 from "../../components/RegisterForm/Step2";
import { useContext, useState } from "react";
import Header from "../../components/Header";

const Register = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        telephone: "",
        phone: "",
        emergencyContactName : "",
        emergencyContactNumber: "",
        password: "",
    })

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (text: string, key: keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key]: text
        })
    }

    const steps = [
        {
            component: <Step1 formData={formValues} onChange={handleChange} styles={styles} />
        },
        {
            component: <Step2 formData={formValues} onChange={handleChange} styles={styles} />
        }
    ];

    const onConfirmButtonPress = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const onPreviousButtonPress = () => {
        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <View style={styles.containerRegister}>
            <Header />

            <View style={styles.containerRegisterForm}>
                <Text style={styles.signUp}>Cadastre-se</Text>

                {steps[currentStep].component}

                <View>
                    <Button text={(currentStep >= steps.length - 1) ? 'cadastrar' : 'proximo'} onPress={onConfirmButtonPress}></Button>
                </View>
            </View>

        </View>
    )
}

export default Register;