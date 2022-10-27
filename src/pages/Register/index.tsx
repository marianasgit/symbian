import { Alert, Image, SafeAreaView, Text, View } from "react-native"
import styles from "./style";
import Button from "../../components/Button";
import Step1 from "../../components/RegisterForm/Step1";
import Step2 from "../../components/RegisterForm/Step2";
import { useContext, useState } from "react";
import Header from "../../components/Header";
import { isEmail, isPhoneNumber } from "../../validations";
import apiSymbian from "../../service/apiSymbian";

const Register = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        telephone: "",
        phone: "",
        emergencyContactName : "",
        emergencyContactNumber: "",
        password: "",
        confirmPassword: ""
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

        if (!isFormValid()){
            return Alert.alert("Dados incorretos")
        }

        register()

    }

    const onPreviousButtonPress = () => {
        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const register = async () => {

        try{
            const body = apiSymbian.post('/registerPatient', {
                name: formValues.name,
                email: formValues.email,
                telephone: formValues.telephone,
                phone: formValues.phone,
                emergencyContactName: formValues.emergencyContactName,
                emergencyContactNumber: formValues.emergencyContactNumber,
                password: formValues.password
            });
        } catch (error){}    

    }

    const isFormValid = () => {
        if (currentStep == 0) {
            if (!isEmail(formValues.email)) return false;

            if (formValues.name.length < 3) return false;

            if (!isPhoneNumber(formValues.phone)) return false;

            if (!isPhoneNumber(formValues.telephone)) return false;
        }

        if (currentStep == 1) {
            if (formValues.password.length <= 0) return false;

            if (formValues.confirmPassword.length <= 0) return false;

            if (formValues.password !== formValues.confirmPassword) return false
        }
    }

    return (
        <View style={styles.containerRegister}>

            <Header />

            <Image source={require('../../../assets/doctors.png')} style={styles.image}/>

            <View style={styles.containerRegisterForm}>
                <View style={styles.intro}>
                    <Text style={styles.title}>Seja bem-vindo!</Text>
                    <Text style={styles.text}>Para se cadastrar, preencha as informações a seguir.</Text>
                </View>
                {steps[currentStep].component}

                <View>
                    <Button text={(currentStep >= steps.length - 1) ? 'cadastrar' : 'proximo'} onPress={onConfirmButtonPress}></Button>
                </View>
            </View>
            
        </View>
    )
}

export default Register;