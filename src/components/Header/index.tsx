import { View, Image } from "react-native";
import styles from './style';

const Header = () => {

    return (
        <View>
            <Image source={require('../../../assets/logo.png')} />
        </View>
    )
}

export default Header;