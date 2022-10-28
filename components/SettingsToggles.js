import { View, Switch, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'React';

const SettingsToggle = () => {
    const aiState = () => {
        console.log('aiSpeed saved')
    }
    const headlessState = () => {
        console.log('aiHeadless set')
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>AI Movement Speed</Text>
                <Text>Headless AI</Text>
                <Text>Notifications</Text>
            </View>
            <View style={styles.toggleContainer}>
                <Switch style={styles.aiSpeed} trackColor={} thumbColor={isEnabled ? "#000" : "#fff"} onValueChange={} value={isDisabled}/>
                <Switch style={styles.aiHeadless} trackColor={} thumbColor={isEnabled ? "#000" : "#fff"} onValueChange={} value={isDisabled} />
                <Switch style={styles.notify} trackColor={} thumbColor={isEnabled ? "#000" : "#fff"} onValueChange={} value={isDisabled} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    toggleContainer: {

    },
    headerContainer: {

    },
    aiSpeed: {

    },
})

export default SettingsToggle