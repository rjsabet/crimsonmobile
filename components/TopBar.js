import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MenuButton from './MenuButton';
import SortButton from './SortButton';


const TopBar = () => {
    return(
        <View style={styles.tContainer}>
            <SortButton />
        </View>
    )
}

const styles = StyleSheet.create({
    tContainer: {
        top: hp('10%'),
        height: hp('5%'),
        justifyContent: 'center',
    },
    
})
export default TopBar