import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NewTaskBtn from './NewTaskBtn';
import MenuButton from './MenuButton';

/** TODO: Find a way to use isActive/notActive to change the opacity of the menu buttons */
const BotmBar = ({isActive, notActive}) => {
    return(
        <View style={styles.bContainer}>
            <MenuButton actDash={1} actAcc={0.4} actProx={0.4} actSet={0.4}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bContainer: {
        bottom: hp('-83%'),
        width: wp('100%'),
        height: hp('20%'),
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A2836',
    },
    img: {
        left: wp('-5%'),
    },
})

export default BotmBar