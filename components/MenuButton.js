import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MenuButton = ({actDash, actAcc, actProx, actSet, pressDash, pressAcc, pressProx, pressSet}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={pressDash} style={{width: wp('0%'), left: wp('10%'), position: 'absolute', top: '10%', opacity: actDash}}>
                <Image style={styles.image} source={require("../assets/grid_view_FILL.png")}/>
                <Text style={{position: 'absolute', left: wp('-5%'), top: wp('6%'), color: '#fff', fontSize: 12, opacity: actDash}}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressAcc} style={{width: wp('0%'), left: wp('35%'), position: 'absolute', top: '10%', alignContent: 'center', opacity: actAcc}}>
                <Image style={styles.image} source={require("../assets/manAccounts.png")}/>
                <Text style={styles.accountText}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressProx} style={{width: wp('0%'), left: wp('60%'), position: 'absolute', top: '10%', alignItems: 'center', opacity: actProx}}>
                <Image style={styles.image} source={require("../assets/ipRoute.png")}/>
                <Text style={styles.proxyText}>Proxies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressSet} style={{ width: wp('0%'), position: 'absolute', left: wp('83%'), top: '10%', alignItems: 'center', opacity: actSet}}>
                <Image style={styles.image} source={require("../assets/settings.png")}/>
                <Text style={styles.settingsText}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        bottom: hp('8%'),
        right: wp('-1%'),
        alignContent: 'center',
    },
    accountText: {
        position: 'absolute',
        left: wp('-4%'),
        top: wp('6%'),
        color: '#fff',
        fontSize: 12,
    },
    proxyText: {
        position: 'absolute',
        left: wp('-5%'),
        top: wp('6%'),
        color: '#fff',
        fontSize: 12,
    },
    settingsText: {
        position: 'absolute',
        left: wp('-6%'),
        top: wp('6%'),
        color: '#fff',
        fontSize: 12,
    },


})

export default MenuButton