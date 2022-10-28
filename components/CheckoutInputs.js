import { Text, TextInput, View, StyleSheet, Animated } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { useFonts } from 'expo-font';

const CheckoutInputs = () => {

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
        <View style={styles.coContainer}>
            <Text style={styles.titleText}>Checkout Info</Text>
            <View style={styles.form}>
                <View style={styles.fname}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'First Name'} />
                </View>
                <View style={styles.lname}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Last Name'} />
                </View>
                <View style={styles.email}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Email Address'} />
                </View>
                <View style={styles.phone}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Phone Number'} />
                </View>
                <View style={styles.addressOne}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Address Line 1'} />
                </View>
                <View style={styles.addressTwo}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Address Line 2'} />
                </View>
                <View style={styles.state_}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'State (Abrv.)'} />
                </View>
                <View style={styles.zipcode}>
                    <TextInput style={styles.input} placeholderTextColor="#707070" placeholder={'Zipcode'} />
                </View>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    coContainer: {
        paddingTop: 0,
        paddingLeft: 10,
        top: 0
    },
    titleText: {
        color: '#fff',
        fontFamily: 'Notobold',
        fontSize: 15,
        top: 30,
        left: 30
    },
    form: {
        top: 0,
        left: -10,
    },
    fname : {
        width: 150,
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
    lname : {
        width: 150,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 45,
        left: '50%',

    },
    email : {
        width: 150,
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
    phone : {
        width: 150,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 85,
        left: '50%',
    },
    addressOne : {
        width: 150,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 180,
        left: '8%',
    },
    addressTwo : {
        width: 150,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 180,
        left: '50%',
    },
    state_ : {
        width: 150,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 220,
        left: '8%',
    },
    zipcode : {
        width: 150,
        height: 30,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
        paddingLeft: 4,
        position: 'absolute',
        top: 220,
        left: '50%',
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

export default CheckoutInputs