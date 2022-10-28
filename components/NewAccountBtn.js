import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Animated, Easing, Pressable, useWindowDimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NewAccountBtn = ({onPress}) => {
    const showWin = () => {

    }
    return(
        <TouchableOpacity style={styles.accButton} onPress={onPress}>
            <Image source={require('../assets/library_add_FILL.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    accButton: {
        width: wp('0%'),
        height: hp('0%'),
        top: hp('8%'),
        left: wp('81%'),
    },
})

export default NewAccountBtn