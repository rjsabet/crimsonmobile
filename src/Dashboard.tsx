import { Text, View, Image, ScrollView, StyleSheet, Pressable } from "react-native";
import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BottomSheet } from "./BottomSheet";
import SortButton from "../components/SortButton";
import NewTaskBtn from "../components/NewTaskBtn";
import CreateTaskWin from "./CreateTaskWin";
import MenuButton from "../components/MenuButton";
/*View - will be used for the instanceCards and the main view */

const Dashboard = ({isActive, notActive, navigation}) => {
    
    const [showBottomSheet, setShowBottomSheet] = React.useState(false);
    const hide = () => {
        setShowBottomSheet(false)
    }
    const showWin = () => {
        setShowBottomSheet(true)
    }

    const nav2acc = () => navigation.navigate('Accounts');
    const nav2prox = () => navigation.navigate('Proxies');
    const nav2set = () => navigation.navigate('Settings');
    const nav2dash = () => navigation.navigate('Dashboard');

    return (
        <View style={styles.container}>
            <View style={styles.tContainer}>
                <SortButton />
            </View>
            <BottomSheet show={showBottomSheet} height={hp('93%')} onOuterClick={hide}>
                <CreateTaskWin />
            </BottomSheet>
            <NewTaskBtn onPress={showWin}/>
            <View style={styles.bContainer}>
                <MenuButton pressAcc={nav2acc} pressProx={nav2prox} pressSet={nav2set} actDash={1} actAcc={0.4} actProx={0.4} actSet={0.4}/>
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
  });

export default Dashboard