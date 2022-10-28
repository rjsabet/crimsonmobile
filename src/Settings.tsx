import { Text, View, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BottomSheet } from './BottomSheet'
import MenuButton from '../components/MenuButton'
import CreateAccountsWin from './CreateAccountWin'
import NewAccountBtn from '../components/NewAccountBtn'
import { useFonts } from 'expo-font'

const Settings = ({isActive, notActive, navigation}) => {
    
    const [showBottomSheet, setShowBottomSheet] = React.useState(false);
    const hide = () => {
        setShowBottomSheet(false)
    }
    const showWin = () => {
        setShowBottomSheet(true)
    }

    const [loaded] = useFonts({
        'Notobold': require('../assets/fonts/NotoSansJavanese-Bold.ttf'),
        'Notoreg': require('../assets/fonts/NotoSansJavanese-Regular.ttf'),
        'Notomed': require('../assets/fonts/NotoSansJavanese-Medium.ttf'),
        'Notosemi': require('../assets/fonts/NotoSansJavanese-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const nav2acc = () => navigation.navigate('Accounts');
    const nav2prox = () => navigation.navigate('Proxies');
    const nav2set = () => navigation.navigate('Settings');
    const nav2dash = () => navigation.navigate('Dashboard');

    return (
        <View style={styles.container}>
            <View style={styles.tContainer}>
                <Text style={styles.header}>Accounts</Text>
            </View>
            <BottomSheet show={showBottomSheet} height={hp('93%')} onOuterClick={hide}>
                <CreateAccountsWin />
            </BottomSheet>
            <NewAccountBtn onPress={showWin}/>
            <View style={styles.bContainer}>
                <MenuButton pressDash={nav2dash} pressAcc={nav2acc} pressProx={nav2prox} pressSet={nav2set} actDash={0.4} actAcc={1} actProx={0.4} actSet={0.4}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#414055',
    },
    bContainer: {
        bottom: hp('-83%'),
        width: wp('100%'),
        height: hp('20%'),
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A2836',
    },
    tContainer: {
        top: hp('10%'),
        height: hp('5%'),
        justifyContent: 'center',
    },
    header: {
        fontFamily: 'Notobold',
        color: '#fff',
        fontSize: 25,
        paddingLeft: 19,

    }
  });

export default Settings
