import ModalDropdown from 'react-native-modal-dropdown';
import {Text, StyleSheet, View} from 'react-native';
import { useFonts } from 'expo-font';


const Dropdowns = ({data, defVal, titleText}) => {

    /**Data Modal - Accounts */
    const accountArr = ['Account 1', 'Account 2', 'Account 3']

    /**Data Modal - Proxy */
    const proxyArr = ['Proxy 1', 'Proxy 2', 'Proxy 3']

    /**Custom Fonts loads */
    const [loaded] = useFonts({
        'Notoreg': require('../assets/fonts/NotoSansJavanese-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <Text style={styles.inputTitle}>{titleText}</Text>
            <ModalDropdown 
                dropdownStyle={dropSkin.container} animated={true} textStyle={dropText.textColor} style={styles.modal} defaultValue={defVal} options={data}
            />
        </View>
    )
}

/* Dropdown options styling */
const dropSkin = StyleSheet.create({
    container: {
        width: 178,
        height: 253,
    }
})

/* Dropdown text styling */
const dropText = StyleSheet.create({
    textColor: {
        color:'#fff',
        
    },
})

/* Basic Styling*/
const styles = StyleSheet.create({
    inputTitle: {
        color: '#fff',
        fontFamily: 'Notoreg',
        paddingBottom: 0.5,
        paddingTop: 13,
    },
    modal: {
        width: 178,
        height: 33,
        color: '#fff',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        padding: 8,
    },
})

export default Dropdowns