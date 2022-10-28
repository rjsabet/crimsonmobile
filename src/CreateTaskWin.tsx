import { Text, TextInput, View, StyleSheet, Animated, Easing, Pressable, useWindowDimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { useFonts } from 'expo-font';
import Inputs from "../components/Inputs";
import Dropdowns from "../components/Dropdowns";



const CreateTaskWin = () => {

    /**Data Modal - Accounts */
    const accountArr = ['Account 1', 'Account 2', 'Account 3']

    /**Data Modal - Proxy */
    const proxyArr = ['Proxy 1', 'Proxy 2', 'Proxy 3']

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
            <Text style={styles.header}>Create Task</Text>
            <View style={styles.form}>
                <Inputs titleText={'Item URL'} defVal={'Insert or paste item link'}/>
                <Dropdowns titleText={'Accounts'} defVal={'Select Account'} data={accountArr}/>
                <Dropdowns titleText={'Proxy (Optional)'} defVal={'Select proxy IP'} data={proxyArr}/>
                <Inputs titleText={'Size'} defVal={'Insert size'}/>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.schedular}>

            </View>
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
    header: {
        fontFamily: 'Notobold',
        fontSize: 25,
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
    separator: {
        borderTopWidth: 0.5,
        width: wp(100),
        left: hp('0%'),
        top: hp('25%'),
        borderColor: '#707070',
        paddingBottom: 20,
    },
    schedular: {
        
    }

})

export default CreateTaskWin