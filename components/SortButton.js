import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SortButton = () => {
    return(
        <TouchableOpacity style={styles.sortButton}>
            <Image style={styles.image} source={require("../assets/sort_component.png")}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sortButton: {
        width: wp('0%'),
        height: hp('0%'),
        right: wp('-77%'),
    },
    
})

export default SortButton