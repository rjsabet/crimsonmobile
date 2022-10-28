import { Text, TextInput, View, StyleSheet, Animated } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { useFonts } from 'expo-font';

const PaymentInputs = () => {

    const [loaded] = useFonts({
        'Notobold': require('../assets/fonts/NotoSansJavanese-Bold.ttf'),
        'Notoreg': require('../assets/fonts/NotoSansJavanese-Regular.ttf'),
        'Notomed': require('../assets/fonts/NotoSansJavanese-Medium.ttf'),
        'Notosemi': require('../assets/fonts/NotoSansJavanese-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    /** Finish up all inputs */

    return(
        <View style={styles.pContainer}>
            <Text style={styles.titleText}>Payment Info</Text>
            <View style={styles.cardNum}>
                <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Card Number'} />
            </View>
            <View style={styles.month}>
                <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'MM'} />
            </View>
            <View style={styles.year}>
                <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'YYYY'} />
            </View>
            <View style={styles.csc}>
                <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'CSC'} />
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    pContainer: {
        paddingTop: 15,
        paddingLeft: 10,
        top: 270,
    },
    titleText: {
        color: '#fff',
        fontFamily: 'Notobold',
        fontSize: 15,
        top: 4,
        left: 30
    },
    cardNum : {
        width: 270,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 45,
        left: '8%',
        paddingRight: 12,

    },
    month : {
        width: 80,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 85,
        left: '8%',
    },
    year : {
        width: 100,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 85,
        left: '32%',
    },
    csc : {
        width: 80,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 130,
        left: '8%',
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

export default PaymentInputs