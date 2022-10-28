import { Text, TextInput, View, StyleSheet, Animated, Easing, Pressable, useWindowDimensions, TouchableOpacity, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { useFonts } from 'expo-font';
import Inputs from "../components/Inputs";
import Dropdowns from "../components/Dropdowns";
import CheckoutInputs from "../components/CheckoutInputs";
import PaymentInputs from "../components/PaymentInputs";



const CreateAccountsWin = () => {

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
        <View style={styles.taskWin}>
            <CheckoutInputs />
            <PaymentInputs />
            <TouchableOpacity style={styles.cancelBtn}>
                <Text>Cancel</Text>
            </TouchableOpacity>

        </View>
    )
}
  

const styles = StyleSheet.create({
    taskWin: {
        display: 'flex',
        backgroundColor: '#2A2836',
        height: hp('93%'),
        bottom: hp('-6%'),
        borderRadius: 39,
    },
    h1: {
        fontFamily: 'Notobold',
        fontSize: 15,
        color: '#fff',
        top: hp('6%'),
        left: hp('3%'),
    },
    h2: {
        fontFamily: 'Notobold',
        fontSize: 15,
        color: '#fff',
        top: hp('6%'),
        left: hp('3%'),
    },
    form: {
        alignContent: "center",
        backgroundColor: "transparent",
        height: hp('30%'),
        width: hp('100%'),
        top: hp('13%'),
        left: hp('0%'),
        paddingLeft: 19,
    },
    accName: {
        top: hp('1%'),

    } 

})

export default CreateAccountsWin