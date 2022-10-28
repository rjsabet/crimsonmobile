import { Text, TextInput, View, StyleSheet, Animated } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { useFonts } from 'expo-font';

const Inputs = ({titleText, defVal}) => {

    const [loaded] = useFonts({
        'Notobold': require('../assets/fonts/NotoSansJavanese-Bold.ttf'),
        'Notoreg': require('../assets/fonts/NotoSansJavanese-Regular.ttf'),
        'Notomed': require('../assets/fonts/NotoSansJavanese-Medium.ttf'),
        'Notosemi': require('../assets/fonts/NotoSansJavanese-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{titleText}</Text>
            <View style={styles.inputBorder}>
                <TextInput style={styles.input} defaultValue={defVal} />
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
    },
    titleText: {
        color: '#fff',
        fontFamily: 'Notoreg',
        top: 4,
    },
    inputBorder : {
        width: 306,
        height: 39,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
    },
    input: {
        width: wp('95%'),
        height: 35,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        color:'#fff',
        padding: 0,
    },
}) 

Inputs.defaultProps = {
    titleText: 'insert title',
    defVal: 'insert placeholder'
}


export default Inputs