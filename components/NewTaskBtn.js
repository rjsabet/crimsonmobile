import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Animated, Easing, Pressable, useWindowDimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NewTaskBtn = ({onPress}) => {
    const showWin = () => {

    }
    return(
        <TouchableOpacity style={styles.taskButton} onPress={onPress}>
            <Image source={require('../assets/add_circle_FILL.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskButton: {
        width: wp('0%'),
        height: hp('0%'),
        top: hp('70%'),
        left: wp('41%'),
    },
})

export default NewTaskBtn